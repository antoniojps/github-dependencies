import { DependenciesData } from '@github-graphs/types';

/**
 * filter out related dependencies in favor of most used
 * for example, only show 'react' instead of 'react' and 'react-dom'
 * */
export const filterTopRelatedDependencies = (data: DependenciesData) => {
  let dataCleaned: DependenciesData = [];
  let filtered: DependenciesData = [];

  data.filter((currentDependency) => {
    // skip if already filtered
    if (filtered.find((dep) => dep.label === currentDependency.label)) return dataCleaned;

    const related = data.filter((dep) => dep.label.includes(currentDependency.label));
    const relatedHighest = related.sort((a, b) => b.value - a.value)[0];
    filtered = [...filtered, ...related];

    // only add if not parsed already
    if (dataCleaned.find((dep) => dep.label === relatedHighest.label)) return dataCleaned;
    dataCleaned = [...dataCleaned, relatedHighest];
  });

  return dataCleaned;
};
