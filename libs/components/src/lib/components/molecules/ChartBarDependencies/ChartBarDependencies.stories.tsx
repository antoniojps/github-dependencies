import React, { ReactElement } from 'react';
import { ChartBarDependencies } from './ChartBarDependencies';

export default {
  title: 'molecules/ChartBarDependencies',
};

const data = [
  { label: 'react', value: 16 },
  { label: 'eslint', value: 13 },
  { label: 'axios', value: 10 },
  { label: 'graphql', value: 10 },
  { label: 'typescript', value: 10 },
  { label: 'husky', value: 9 },
  { label: 'dotenv', value: 9 },
  { label: 'prop-types', value: 8 },
  { label: 'query-string', value: 4 },
  { label: 'mongoose', value: 2 },
];

export const Basic = (): ReactElement => <ChartBarDependencies data={data} />;
