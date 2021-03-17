import React, { useState, useEffect, ReactNode } from 'react';
import { Popover as TinyPopover, PopoverProps } from 'react-tiny-popover';
import styles from './Popover.module.scss';

type Props = {
  children: ReactNode;
  onChangeOpen?: (isOpen: boolean) => void;
} & PopoverProps;

export const Popover = ({ children, content, onChangeOpen, positions, align, ...rest }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  useEffect(() => {
    onChangeOpen(isOpen);
  }, [isOpen]);

  const handleClickOutside = () => {
    setOpen(false);
  };

  return (
    <TinyPopover
      isOpen={isOpen}
      positions={positions}
      align={align}
      content={content}
      onClickOutside={handleClickOutside}
      containerStyle={{
        overflow: 'visible',
        backgroundColor: 'var(--foreground)',
        borderRadius: 'var(--radius)',
        color: 'var(--base-inverse)',
        zIndex: 'var(--z-index-m)',
      }}
      {...rest}
    >
      <div onClick={handleClick} className={styles.children}>
        {children}
      </div>
    </TinyPopover>
  );
};
