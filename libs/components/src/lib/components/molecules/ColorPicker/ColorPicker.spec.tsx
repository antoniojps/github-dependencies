import React from 'react';
import { render } from '@testing-library/react';

import { ColorPicker } from './ColorPicker';

describe('ColorPicker', () => {
  it('renders', () => {
    const { asFragment } = render(<ColorPicker color="yellow" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders small', () => {
    const { asFragment } = render(<ColorPicker color="yellow" size="small" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
