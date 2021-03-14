import { filterTopRelatedDependencies } from '../lib/filters';
import { dependenciesDataMock } from '../___mocks__/dataMocks';

describe('npm', () => {
  describe('filterTopRelatedDependencies', () => {
    it('should cleanup related dependencies in favor of top dependency', () => {
      expect(filterTopRelatedDependencies(dependenciesDataMock)).toEqual([
        { label: 'react', value: 16 },
        { label: 'eslint', value: 14 },
        { label: 'graphql', value: 11 },
        { label: 'husky', value: 10 },
        { label: 'typescript', value: 10 },
        { label: 'dotenv', value: 9 },
        { label: 'babel-jest', value: 9 },
        { label: 'axios', value: 8 },
        { label: 'prop-types', value: 8 },
        { label: 'query-string', value: 8 },
        { label: 'lodash.merge', value: 8 },
        { label: 'mongoose', value: 8 },
        { label: '@babel/core', value: 7 },
        { label: 'jsonwebtoken', value: 7 },
        { label: 'next', value: 7 },
        { label: '@types/node', value: 7 },
        { label: 'date-fns', value: 6 },
        { label: 'cross-env', value: 6 },
        { label: 'apollo-server-micro', value: 6 },
        { label: 'styled-components', value: 4 },
        { label: 'yup', value: 4 },
        { label: 'draft-js', value: 1 },
        { label: 'immer', value: 1 },
      ]);
    });
  });
});
