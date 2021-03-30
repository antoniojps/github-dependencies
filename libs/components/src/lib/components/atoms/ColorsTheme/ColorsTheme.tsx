import React, { useMemo } from 'react';
import styles from './ColorsTheme.module.scss';

type Colors = string[] | readonly string[] | readonly (readonly string[])[];

type Props = {
  colors: Colors;
};

export const ColorsTheme = ({ colors }: Props) => {
  const colorsComputed = useMemo(() => {
    const color = colors[6];
    if (typeof color !== 'string' && color instanceof Array) return color as string[];
    return colors.slice(0, 6) as string[];
  }, [colors]);

  return (
    <div className={styles.container}>
      {colorsComputed.map((color) => (
        <span className={styles.sample} style={{ background: color }} />
      ))}
    </div>
  );
};
