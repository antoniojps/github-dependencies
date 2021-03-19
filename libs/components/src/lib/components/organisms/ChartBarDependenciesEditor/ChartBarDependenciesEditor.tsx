import React, { LegacyRef } from 'react';
import { ChartBarDependencies } from '../../molecules';
import { ChartTitle } from '../../atoms';
import { ChartBarDependenciesProps } from '@github-graphs/types';
import styles from './ChartBarDependenciesEditor.module.scss';
import { readableColor } from 'polished';

type ChartBarDependenciesEditorProps = {
  backgroundColor: string;
  showGrid: boolean;
  ref: LegacyRef<HTMLDivElement>;
} & ChartBarDependenciesProps;

export const ChartBarDependenciesEditor = ({
  backgroundColor = '#000',
  ref = { current: null },
  ...chartProps
}: ChartBarDependenciesEditorProps) => {
  return (
    <div ref={ref} style={{ backgroundColor }} className={styles.chart}>
      <ChartTitle
        username="antoniojps"
        chart="dependencies usage graph"
        color={readableColor(backgroundColor)}
      />
      <ChartBarDependencies {...chartProps} />
    </div>
  );
};
