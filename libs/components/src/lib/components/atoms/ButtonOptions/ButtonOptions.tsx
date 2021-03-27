import React, { ReactNode } from 'react';
import styles from './ButtonOptions.module.scss';
import { ChevronDown } from '@geist-ui/react-icons';
import { noop } from 'lodash';

export type ButtonOptionsProps = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClickOptions: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonOptions = ({
  children,
  onClick = noop,
  onClickOptions = noop,
}: ButtonOptionsProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
      <button className={styles.buttonOptions} onClick={onClickOptions}>
        <ChevronDown size={14} color={'var(--yellow)'} />
      </button>
    </div>
  );
};
