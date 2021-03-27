import React, { ReactNode, useState, CSSProperties } from 'react';
import { Popover as TinyPopover, PopoverProps } from 'react-tiny-popover';
import styles from './Popover.module.scss';

type Props = {
  children: ReactNode;
  customContainerStyle?: Partial<CSSProperties>;
  isOpen: boolean;
  toggle: (isOpen?: boolean) => void;
  shouldHandleClick?: boolean;
} & PopoverProps;

export function usePopover(initial = false): [boolean, Props['toggle']] {
  const [isOpen, setOpen] = useState(initial);
  const toggle = (nextOpen?: boolean) => {
    if (nextOpen) setOpen(nextOpen);
    else setOpen(!isOpen);
  };
  return [isOpen, toggle];
}

export const Popover = ({
  children,
  content,
  positions,
  align,
  containerStyle,
  isOpen = false,
  toggle,
  shouldHandleClick = true,
  ...rest
}: Props) => {
  const handleClick = (e) => {
    if (shouldHandleClick) {
      e.preventDefault();
      toggle();
    }
  };

  const handleClickOutside = () => {
    toggle(false);
  };

  return (
    <TinyPopover
      isOpen={isOpen}
      positions={positions}
      align={align}
      content={content}
      onClickOutside={handleClickOutside}
      containerStyle={
        containerStyle || {
          overflow: 'visible',
          backgroundColor: 'var(--foreground)',
          borderRadius: 'var(--radius)',
          color: 'var(--base-inverse)',
          zIndex: 'var(--z-index-xl2)',
        }
      }
      {...rest}
    >
      <div onClick={handleClick} className={styles.children}>
        {children}
      </div>
    </TinyPopover>
  );
};
