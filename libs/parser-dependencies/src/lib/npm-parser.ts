import Ajv from 'ajv';
import { PackageJson } from '@github-graphs/types';
import { flatten } from 'lodash';
import schema from './schema.json';

const ajv = new Ajv();
const validate = ajv.compile(schema);

/** Parses all dependencies names from package json */
export function parsePackageJson(packageJson: PackageJson) {
  if (!validate(packageJson)) {
    throw new Error('invalid package json schema');
    return [];
  }
  const dependencies = Object.keys(packageJson?.dependencies || {});
  const devDependencies = Object.keys(packageJson?.devDependencies || {});
  const optionalDependencies = Object.keys(packageJson?.optionalDependencies || {});
  const peerDependencies = Object.keys(packageJson?.peerDependencies || {});

  return [...dependencies, ...devDependencies, ...optionalDependencies, ...peerDependencies];
}

type DependenciesData = {
  label: string;
  value: number;
};

/** Parses occurrence of dependencies from multiple package jsons */
export function parser(packageJsonArray: PackageJson[]): DependenciesData[] {
  const mergedDependencies = flatten(packageJsonArray.map(parsePackageJson));

  const dependenciesData: DependenciesData[] = mergedDependencies.reduce(
    (data: DependenciesData[], dependency: string) => {
      const indexFound = data.findIndex((dataItem) => dataItem?.label === dependency);
      const dependencyIndex = indexFound === -1 ? data.length : indexFound;
      const occurrence = (data[dependencyIndex]?.value || 0) + 1;

      data[dependencyIndex] = {
        label: dependency,
        value: occurrence,
      };
      return data;
    },
    []
  );

  return dependenciesData;
}
