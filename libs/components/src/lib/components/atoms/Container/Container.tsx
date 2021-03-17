import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
  center?: boolean;
  shrink?: boolean;
  className?: string;
};

export const Container = ({
  children,
  shrink,
  center,
  className,
}: ContainerProps): ReactElement => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.shrink]: shrink,
        [styles.center]: center,
        [className]: Boolean(className),
      })}
    >
      {children}
    </div>
  );
};
