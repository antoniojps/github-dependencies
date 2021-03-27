import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Popover, usePopover } from './Popover';

const Content = () => <div>content</div>;

const PopoverDummy = ({ isOpenDefault }: { isOpenDefault?: boolean }) => {
  const [isOpen, toggle] = usePopover(false);

  return (
    <Popover content={Content} isOpen={isOpen} toggle={toggle} positions={['bottom']} padding={5}>
      <p>click</p>
    </Popover>
  );
};

describe('Popover', () => {
  it('renders', () => {
    const { asFragment } = render(<PopoverDummy />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders open', () => {
    const { asFragment } = render(<PopoverDummy isOpenDefault />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render popover content on click', () => {
    render(<PopoverDummy />);
    expect(screen.queryByText('content')).toBeNull();
    fireEvent.click(screen.getByText('click'));
    expect(screen.getByText('content')).toBeTruthy();
  });
});
