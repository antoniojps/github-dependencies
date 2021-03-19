import React, { ReactElement } from 'react';
import { ChartBarDependenciesEditor } from './ChartBarDependenciesEditor';
import { select, color, boolean } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

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

const options = {
  blues: 'blues',
  greens: 'greens',
  greys: 'greys',
  oranges: 'oranges',
  purples: 'purples',
  reds: 'reds',
  blue_green: 'blue_green',
  blue_purple: 'blue_purple',
  green_blue: 'green_blue',
  orange_red: 'orange_red',
  purple_blue_green: 'purple_blue_green',
  purple_blue: 'purple_blue',
  purple_red: 'purple_red',
  red_purple: 'red_purple',
  yellow_green_blue: 'yellow_green_blue',
  yellow_green: 'yellow_green',
  yellow_orange_brown: 'yellow_orange_brown',
  yellow_orange_red: 'yellow_orange_red',
  brown_blueGreen: 'brown_blueGreen',
  purpleRed_green: 'purpleRed_green',
  pink_yellowGreen: 'pink_yellowGreen',
  purple_orange: 'purple_orange',
  red_blue: 'red_blue',
  red_grey: 'red_grey',
  red_yellow_blue: 'red_yellow_blue',
  red_yellow_green: 'red_yellow_green',
  spectral: 'spectral',
  nivo: 'nivo',
  category10: 'category10',
  accent: 'accent',
  dark2: 'dark2',
  paired: 'paired',
  pastel1: 'pastel1',
  pastel2: 'pastel2',
  set1: 'set1',
  set2: 'set2',
  set3: 'set3',
  None: null,
};

addDecorator(withSmartKnobs({ ignoreProps: ['colorScheme', 'backgroundColor'] }));

export const Basic = (): ReactElement => (
  <ChartBarDependenciesEditor
    data={data}
    colorScheme={select('colorScheme', options, 'set3', 'theme')}
    backgroundColor={color('backgroundColor', '#000', 'theme')}
    enableGrid={boolean('enableGrid', true, 'theme')}
    gridColor={color('gridColor', 'rgba(255,255,255,0.2)', 'theme')}
  />
);
