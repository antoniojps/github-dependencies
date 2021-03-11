import React from 'react';
import { render } from '@testing-library/react';
import { Container } from './Container';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

describe('Container', () => {
  it('renders', () => {
    const { asFragment } = render(<Container>{loremIpsum}</Container>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Container centered', () => {
    const { asFragment } = render(<Container center>{loremIpsum}</Container>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Container shrinked', () => {
    const { asFragment } = render(<Container shrink>{loremIpsum}</Container>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Container shrinked and centered', () => {
    const { asFragment } = render(
      <Container shrink center>
        {loremIpsum}
      </Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
