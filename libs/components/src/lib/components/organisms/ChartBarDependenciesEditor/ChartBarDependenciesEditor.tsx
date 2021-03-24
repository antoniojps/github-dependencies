import React from 'react';
import { ChartBarDependencies, ColorPicker } from '../../molecules';
import { ChartTitle, ColorsTheme } from '../../atoms';
import { DependenciesData } from '@github-graphs/types';
import styles from './ChartBarDependenciesEditor.module.scss';
import { readableColor } from 'polished';
import { Select, Toggle, Text, Spacer } from '@geist-ui/react';
import { themes } from './CharBarDependenciesEditor.data';
import { useChartDependenciesEditor } from './useChartDependenciesEditor';
import { ColorSchemeId, colorSchemes } from '@nivo/colors';

type ChartBarDependenciesEditorProps = { data: DependenciesData; isLoading: boolean };

export const ChartBarDependenciesEditor = ({
  data = [],
  isLoading = false,
}: ChartBarDependenciesEditorProps) => {
  const [
    { colorScheme, enableGrid, backgroundColor, gridColor },
    { setColorScheme, setEnableGrid, setBackgroundColor, setGridColor },
  ] = useChartDependenciesEditor();

  if (isLoading) return <div className={styles.editor}>We are loading...</div>;

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
            <Select.Option value={theme}>
              <ColorsTheme colors={colorSchemes[theme]} />
            </Select.Option>
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
          chart="top 10 used dependencies"
          color={readableColor(backgroundColor)}
        />
        <ChartBarDependencies
          data={data}
          colorScheme={colorScheme}
          enableGrid={enableGrid}
          gridColor={gridColor}
        />
      </div>
    </div>
  );
};
