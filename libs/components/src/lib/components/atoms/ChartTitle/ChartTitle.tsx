import React from 'react';
import { Text, Spacer } from '@geist-ui/react';
import { Github } from '../';
import styles from './ChartTitle.module.scss';

type ChartTitleProps = {
  username: string;
  chart: string;
  color?: string;
};

export const ChartTitle = ({ username, chart, color = 'var(--base)' }: ChartTitleProps) => {
  return (
    <Text className={styles.chartTitle} style={{ color }}>
      <Github height={20} />
      <Spacer x={0.4} />
      <Text span b>
        @{username}
      </Text>
      <Spacer x={0.2} />
      <Text span>{chart}</Text>
    </Text>
  );
};
