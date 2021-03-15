import React from 'react';
import { render } from '@testing-library/react';
import { User } from './User';

describe('User', () => {
  it('renders', () => {
    const { asFragment } = render(<User name="Antonio" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with image', () => {
    const { asFragment } = render(
      <User name="Antonio" image="https://react.geist-ui.dev/images/avatar.png" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with name reverse', () => {
    const { asFragment } = render(<User name="Antonio" isReverse />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with size large', () => {
    const { asFragment } = render(<User name="Antonio" size="large" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with image, reverse and large', () => {
    const { asFragment } = render(
      <User name="Antonio" image="https://react.geist-ui.dev/images/avatar.png" size="large" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
