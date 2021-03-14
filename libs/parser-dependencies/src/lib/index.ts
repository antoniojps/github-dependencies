import {
  Parser,
  FetchFileResult,
  DependenciesFileMap,
  DependenciesFilesPerPackageManager,
  ParserParams,
  ParserResult,
} from '@github-graphs/types';
import { parser as npmParser } from './npm';
import { parser as composerParser } from './composer';
import { flatten } from 'lodash';

export const defaultPackageManagersMap: Parser[] = [
  {
    packageManager: 'npm',
    files: ['package.json'],
    parser: npmParser,
  },
  {
    packageManager: 'composer',
    files: ['composer.json'],
    parser: composerParser,
  },
];

export const parser = async ({
  reposContents,
  fetchFile,
  packageManagersMap = defaultPackageManagersMap,
}: ParserParams): Promise<ParserResult> => {
  // find dependencies files from repo contents
  const dependenciesFilesMap: DependenciesFileMap = flatten(
    packageManagersMap.map((parser) => {
      return flatten(
        reposContents.map((contents) => {
          const filesToParse = contents.filter(
            (content) => content.type === 'file' && parser.files.includes(content.name)
          );
          return filesToParse.map((content) => ({
            packageManager: parser.packageManager,
            name: content.name,
            url: content.url,
          }));
        })
      );
    })
  );

  // fetch files
  const fetchDependenciesFiles = dependenciesFilesMap.map((file) =>
    fetchFile(file.url, file.packageManager)
  );

  const settledResults = await Promise.allSettled(fetchDependenciesFiles);
  const dependenciesFiles: FetchFileResult[] = settledResults.reduce((acc, result) => {
    if (result.status === 'fulfilled' && result.value) return [...acc, result.value];
    return acc;
  }, []);

  // organize files per package manager
  const dependenciesFilesPerPackageManager: DependenciesFilesPerPackageManager = dependenciesFiles.reduce(
    (acc, curr) => {
      const packageManagerIndex = acc.findIndex(
        (item) => item.packageManager === curr.packageManager
      );

      if (packageManagerIndex === -1)
        return [...acc, { packageManager: curr.packageManager, files: [curr.file] }];

      acc[packageManagerIndex] = {
        ...acc[packageManagerIndex],
        files: [...acc[packageManagerIndex].files, curr.file],
      };
      return acc;
    },
    []
  );

  // parsed dependencies occurrence per package manager with null values (dirty)
  const parsedDependencies = dependenciesFilesPerPackageManager.map((dependencies) => {
    const { packageManager, files } = dependencies;

    const packageManagerParser = packageManagersMap.find(
      (p) => p.packageManager === packageManager
    );

    return {
      packageManager,
      data: packageManagerParser.parser(files),
    };
  });

  return parsedDependencies;
};
