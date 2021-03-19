import React, { ReactElement } from 'react';
import { ChartBarDependenciesEditor } from './ChartBarDependenciesEditor';
import { Container } from './../../atoms';
import { select, color, boolean } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { themes } from './CharBarDependenciesEditor.data';

export default {
  title: 'organisms/ChartBarDependenciesEditor',
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

addDecorator(withSmartKnobs({ ignoreProps: ['colorScheme', 'backgroundColor'] }));

export const Basic = (): ReactElement => (
  <Container center shrink>
    <div style={{ height: '10px', width: '100%' }} />
    <ChartBarDependenciesEditor
      data={data}
      colorScheme={select('colorScheme', themes, 'set3', 'theme')}
      backgroundColor={color('backgroundColor', '#000', 'theme')}
      enableGrid={boolean('enableGrid', true, 'theme')}
      gridColor={color('gridColor', 'rgba(255,255,255,0.2)', 'theme')}
    />
  </Container>
);
