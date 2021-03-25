import React, { ReactElement } from 'react';
import { ChartBarDependenciesEditor } from './ChartBarDependenciesEditor';
import { Container } from './../../atoms';
import { addDecorator } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

export default {
  title: 'organisms/ChartBarDependenciesEditor',
};

const data = [
  { label: 'mongoose', value: 2 },
  { label: 'query-string', value: 4 },
  { label: 'prop-types', value: 8 },
  { label: 'dotenv', value: 9 },
  { label: 'husky', value: 9 },
  { label: 'typescript', value: 10 },
  { label: 'graphql', value: 10 },
  { label: 'axios', value: 10 },
  { label: 'eslint', value: 13 },
  { label: 'react', value: 16 },
];

addDecorator(withSmartKnobs({ ignoreProps: ['isLoading'] }));

export const Basic = (): ReactElement => (
  <Container center shrink>
    <div style={{ height: '10px', width: '100%' }} />
    <ChartBarDependenciesEditor data={data} isLoading={boolean('isLoading', false)} />
  </Container>
);

export const IsLoading = (): ReactElement => (
  <Container center shrink>
    <div style={{ height: '10px', width: '100%' }} />
    <ChartBarDependenciesEditor data={data} isLoading={true} />
  </Container>
);
