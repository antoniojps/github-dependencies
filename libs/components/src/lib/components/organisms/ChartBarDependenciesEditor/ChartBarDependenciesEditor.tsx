import React, { useState } from 'react';
import { ChartBarDependencies, ColorPicker } from '../../molecules';
import { ChartTitle } from '../../atoms';
import { ChartBarDependenciesProps } from '@github-graphs/types';
import styles from './ChartBarDependenciesEditor.module.scss';
import { readableColor } from 'polished';
import { Select, Toggle, Text, Spacer } from '@geist-ui/react';
import { themes } from './CharBarDependenciesEditor.data';
import { ColorSchemeId } from '@nivo/colors';

type ChartBarDependenciesEditorProps = ChartBarDependenciesProps;

export const ChartBarDependenciesEditor = (props: ChartBarDependenciesEditorProps) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeId>('set3');
  const [enableGrid, setEnableGrid] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('rgb(0,0,0)');
  const [gridColor, setGridColor] = useState('rgba(255,255,255,0.2)');

  return (
    <div className={styles.editor}>
      <div className={styles.knobs}>
        <div className={styles.knob} title="background color">
          <ColorPicker color={backgroundColor} onChangeColor={setBackgroundColor} />
        </div>
        <Spacer x={0.5} inline />

        <Select
          placeholder="Theme"
          value={themes.set3}
          width="80px"
          onChange={(value: ColorSchemeId) => setColorScheme(value)}
        >
          {Object.keys(themes).map((theme) => (
            <Select.Option value={theme}>{theme}</Select.Option>
          ))}
        </Select>
        <Spacer x={0.5} inline />

        <div className={styles.knob}>
          <Text small span>
            grid
          </Text>
          <Spacer x={0.2} inline />
          <Toggle
            checked={enableGrid}
            size="large"
            onChange={(e) => setEnableGrid(e.target.checked)}
          />
          <Spacer x={0.2} inline />
          <ColorPicker color={gridColor} onChangeColor={setGridColor} size="small" />
        </div>
      </div>
      <div style={{ backgroundColor }} className={styles.chart}>
        <ChartTitle
          username="antoniojps"
          chart="dependencies usage graph"
          color={readableColor(backgroundColor)}
        />
        <ChartBarDependencies
          {...props}
          colorScheme={colorScheme}
          enableGrid={enableGrid}
          gridColor={gridColor}
        />
      </div>
    </div>
  );
};
