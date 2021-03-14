import Ajv from 'ajv';
import { ComposerJson, DependenciesData } from '@github-graphs/types';
import { flatten } from 'lodash';
import composerSchema from './composer-schema.json';

const ajv = new Ajv();
const validate = ajv.compile(composerSchema);

/** Parses all dependencies names from composer json */
export function parseComposerJson(composerJson: ComposerJson) {
  if (!validate(composerJson)) {
    throw new Error('invalid composer json schema');
    return [];
  }
  const dependencies = Object.keys(composerJson?.require || {});
  const devDependencies = Object.keys(composerJson?.['require-dev'] || {});

  return [...dependencies, ...devDependencies];
}

/** Parses occurrence of dependencies from multiple composer jsons */
export function parser(composerJsonArray: ComposerJson[]): DependenciesData {
  const mergedDependencies = flatten(composerJsonArray.map(parseComposerJson));

  const dependenciesData: DependenciesData = mergedDependencies.reduce(
    (data: DependenciesData, dependency: string) => {
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

  const dependenciesDataSorted = dependenciesData.sort((a, b) => b.value - a.value);

  return dependenciesDataSorted;
}
