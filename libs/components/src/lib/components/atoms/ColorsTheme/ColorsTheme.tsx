import React, { useMemo } from 'react';
import styles from './ColorsTheme.module.scss';

type Props = {
  colors: string[] | readonly string[] | readonly (readonly string[])[];
};

export const ColorsTheme = ({ colors }: Props) => {
  const colorsComputed = useMemo(() => {
    const color = colors[6];
    if (typeof color !== 'string' && color instanceof Array) return color;
    return colors.slice(0, 6);
  }, [colors]);

  return (
    <div className={styles.container}>
      {colorsComputed.map((color) => (
        <span className={styles.sample} style={{ background: color }} />
      ))}
    </div>
  );
};
