import React, { MouseEventHandler } from 'react';
import { ButtonOptions, ButtonOptionsProps } from '../../atoms';
import { Popover, usePopover } from '../Popover/Popover';
import { ContentRenderer } from 'react-tiny-popover';

type ButtonOptionsPopoverProps = {
  children: ButtonOptionsProps['children'];
  onClick: ButtonOptionsProps['onClick'];
  content: ContentRenderer | JSX.Element;
};

export const ButtonOptionsPopover = ({ children, onClick, content }: ButtonOptionsPopoverProps) => {
  const [isOpen, toggle] = usePopover(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    toggle(false);
    onClick(e);
  };

  return (
    <Popover
      content={content}
      isOpen={isOpen}
      toggle={toggle}
      positions={['bottom']}
      padding={5}
      align="start"
      containerStyle={{
        overflow: 'visible',
        backgroundColor: 'var(--background)',
        borderRadius: 'var(--radius)',
        color: 'var(--yellow)',
        boxShadow: ' inset 0px 0px 0px 2px var(--yellow)',
        zIndex: 'var(--z-index-xl2)',
      }}
      shouldHandleClick={false}
    >
      <ButtonOptions onClick={handleClick} onClickOptions={() => toggle()}>
        {children}
      </ButtonOptions>
    </Popover>
  );
};
