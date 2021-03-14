import { packageJsonMock, packageJsonMockAlt } from './npmMocks';
import { composerJsonMock, composerJsonMockAlt } from './composerMocks';

export const dependenciesDataMock = [
  {
    label: 'react',
    value: 16,
  },
  {
    label: 'react-dom',
    value: 16,
  },
  {
    label: 'eslint',
    value: 14,
  },
  {
    label: 'eslint-plugin-react',
    value: 11,
  },
  {
    label: 'graphql',
    value: 11,
  },
  {
    label: 'eslint-plugin-import',
    value: 11,
  },
  {
    label: 'husky',
    value: 10,
  },
  {
    label: 'typescript',
    value: 10,
  },
  {
    label: 'dotenv',
    value: 9,
  },
  {
    label: 'babel-jest',
    value: 9,
  },
  {
    label: 'jest',
    value: 9,
  },
  {
    label: 'axios',
    value: 8,
  },
  {
    label: 'prop-types',
    value: 8,
  },
  {
    label: 'query-string',
    value: 8,
  },
  {
    label: 'lodash.merge',
    value: 8,
  },
  {
    label: 'mongoose',
    value: 8,
  },
  {
    label: 'babel-eslint',
    value: 8,
  },
  {
    label: '@babel/core',
    value: 7,
  },
  {
    label: 'jsonwebtoken',
    value: 7,
  },
  {
    label: 'next',
    value: 7,
  },
  {
    label: '@types/node',
    value: 7,
  },
  {
    label: '@types/react',
    value: 7,
  },
  {
    label: '@types/react-dom',
    value: 7,
  },
  {
    label: 'date-fns',
    value: 6,
  },
  {
    label: 'cross-env',
    value: 6,
  },
  {
    label: 'apollo-server-micro',
    value: 6,
  },
  {
    label: 'graphql-scalars',
    value: 6,
  },
  {
    label: 'graphql-tag',
    value: 6,
  },
  {
    label: '@testing-library/react',
    value: 5,
  },
  {
    label: '@types/jest',
    value: 5,
  },
  {
    label: 'eslint-config-standard',
    value: 5,
  },
  {
    label: 'eslint-plugin-standard',
    value: 5,
  },
  {
    label: 'react-use',
    value: 4,
  },
  {
    label: 'styled-components',
    value: 4,
  },
  {
    label: 'yup',
    value: 4,
  },
  {
    label: 'draft-js',
    value: 1,
  },
  {
    label: 'immer',
    value: 1,
  },
];

export const dependenciesFilesMock: { [key: string]: unknown } = {
  npm: packageJsonMock,
  npmAlt: packageJsonMockAlt,
  composer: composerJsonMock,
  composerAlt: composerJsonMockAlt,
};
