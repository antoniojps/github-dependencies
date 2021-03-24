import React, { ReactNode, ReactElement } from 'react';
import styles from './Breather.module.scss';

type BreatherProps = {
  children: ReactNode;
};

export const Breather = ({ children }: BreatherProps): ReactElement => {
  return (
    <div className={styles.breather}>
      <div className={styles.overlay} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
