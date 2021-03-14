import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
