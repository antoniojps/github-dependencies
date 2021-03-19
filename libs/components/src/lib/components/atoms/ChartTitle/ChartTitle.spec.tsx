import React from 'react';
import { render } from '@testing-library/react';
import { ChartTitle } from './ChartTitle';

describe('ChartTitle', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ChartTitle username="antoniojps" chart="dependencies usage graph" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with color', () => {
    const { asFragment } = render(
      <ChartTitle username="antoniojps" chart="dependencies usage graph" color="red" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
