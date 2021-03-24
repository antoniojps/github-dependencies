import React from 'react';
import { ColorsTheme } from './ColorsTheme';
import { colorSchemes } from '@nivo/colors';

export default {
  title: 'atoms/ColorsTheme',
};

export const Basic = () => <ColorsTheme colors={colorSchemes.nivo} />;
export const WithAlternative = () => <ColorsTheme colors={colorSchemes.set3} />;
export const WithSequential = () => <ColorsTheme colors={colorSchemes.blues} />;
