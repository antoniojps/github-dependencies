import React, { ReactElement } from 'react';
import { ChartTitle } from './ChartTitle';

export default {
  title: 'atoms/ChartTitle',
};

export const Basic = (): ReactElement => (
  <ChartTitle username="antoniojps" chart="dependencies usage graph" />
);
