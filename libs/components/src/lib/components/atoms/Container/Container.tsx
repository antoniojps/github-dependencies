import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
  center?: boolean;
  shrink?: boolean;
};

export const Container = ({ children, shrink, center }: ContainerProps): ReactElement => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.shrink]: shrink,
        [styles.center]: center,
      })}
    >
      {children}
    </div>
  );
};
