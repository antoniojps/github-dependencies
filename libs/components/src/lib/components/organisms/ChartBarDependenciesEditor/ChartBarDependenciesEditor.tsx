import React from 'react';
import { ChartBarDependencies, ColorPicker } from '../../molecules';
import { ChartTitle, ColorsTheme, Breather } from '../../atoms';
import { DependenciesData } from '@github-graphs/types';
import styles from './ChartBarDependenciesEditor.module.scss';
import { readableColor } from 'polished';
import { Select, Toggle, Text, Spacer, Progress } from '@geist-ui/react';
import { themes } from './CharBarDependenciesEditor.data';
import { useChartDependenciesEditor } from './useChartDependenciesEditor';
import { ColorSchemeId, colorSchemes } from '@nivo/colors';
import { useNProgress } from '@tanem/react-nprogress';
import { motion, AnimatePresence } from 'framer-motion';

type ChartBarDependenciesEditorProps = { data: DependenciesData; isLoading: boolean };

export const ChartBarDependenciesEditor = ({
  data = [],
  isLoading = false,
}: ChartBarDependenciesEditorProps) => {
  const [
    { colorScheme, enableGrid, backgroundColor, gridColor },
    { setColorScheme, setEnableGrid, setBackgroundColor, setGridColor },
  ] = useChartDependenciesEditor();
  const { progress } = useNProgress({
    isAnimating: isLoading,
  });

  const renderKnobs = () => (
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
          initialChecked={enableGrid}
          size="large"
          onChange={(e) => setEnableGrid(e.target.checked)}
        />
        <Spacer x={0.2} inline />
        <ColorPicker color={gridColor} onChangeColor={setGridColor} size="small" />
      </div>
    </div>
  );

  return (
    <div className={styles.editor}>
      {isLoading ? <Breather>{renderKnobs()}</Breather> : renderKnobs()}
      <div style={{ backgroundColor }} className={styles.chart}>
        <AnimatePresence exitBeforeEnter initial={false}>
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              key="chart-loading"
              className={styles.loading}
            >
              <Breather>
                <Text h3>Fetching your top dependencies</Text>
                <Spacer y={0.2} />
                <Progress value={progress * 100} className={styles.progress} type="success" />
              </Breather>
            </motion.div>
          ) : (
            <motion.div
              style={{ display: 'flex', alignItems: 'baseline', flexDirection: 'column' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              key="chart"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
