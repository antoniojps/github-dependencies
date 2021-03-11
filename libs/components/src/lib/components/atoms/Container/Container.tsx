import React, { ReactElement, ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps): ReactElement => {
  return <div className={styles.pageWrapper}>{children}</div>;
};
