import React from 'react';
import { render } from '@testing-library/react';
import { ColorsTheme } from './ColorsTheme';
import { colorSchemes } from '@nivo/colors';

describe('ColorsTheme', () => {
  it('renders with nivo (string[])', () => {
    const { asFragment } = render(<ColorsTheme colors={colorSchemes.nivo} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with blues (readonly (readonly string[])[])', () => {
    const { asFragment } = render(<ColorsTheme colors={colorSchemes.blues} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with set3 (readonly string[])', () => {
    const { asFragment } = render(<ColorsTheme colors={colorSchemes.set3} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
