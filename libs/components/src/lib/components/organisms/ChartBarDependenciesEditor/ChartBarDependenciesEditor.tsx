import React from 'react';
import { ChartBarDependencies, ColorPicker, ButtonDownload } from '../../molecules';
import { ChartTitle, ColorsTheme, Breather } from '../../atoms';
import { DependenciesData, DownloadOptions } from '@github-graphs/types';
import styles from './ChartBarDependenciesEditor.module.scss';
import { readableColor } from 'polished';
import { Select, Toggle, Text, Spacer, Progress } from '@geist-ui/react';
import { themes } from './CharBarDependenciesEditor.data';
import { useChartDependenciesEditor } from './useChartDependenciesEditor';
import { ColorSchemeId, colorSchemes } from '@nivo/colors';
import { useNProgress } from '@tanem/react-nprogress';
import { motion, AnimatePresence } from 'framer-motion';
import { noop } from 'lodash';

type ChartBarDependenciesEditorProps = {
  data?: DependenciesData;
  isLoading?: boolean;
  isError?: boolean;
  handleDownload?: (options: DownloadOptions) => void;
};

export const ChartBarDependenciesEditor = ({
  data = [],
  isLoading = false,
  isError = false,
  handleDownload = noop,
}: ChartBarDependenciesEditorProps) => {
  const [
    { colorScheme, enableGrid, backgroundColor, gridColor, isProlongedLoading },
    { setColorScheme, setEnableGrid, setBackgroundColor, setGridColor },
  ] = useChartDependenciesEditor({ isLoading });
  const { progress } = useNProgress({
    isAnimating: isLoading,
  });

  const renderKnobs = () => (
    <div className={styles.knobs}>
      <div className={styles.knobsStart}>
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
      <div className={styles.knobsEnd}>
        <ButtonDownload onClick={handleDownload} />
      </div>
    </div>
  );

  if (isError)
    return (
      <div className={styles.editor}>
        <div className={styles.messageContainer}>
          <Text h3>Something went wrong...</Text>
          <Text type="secondary" span small>
            Maybe we've reached Github's API limit or we couldn't find any repositories with package
            dependencies. Please{' '}
            <a
              href="https://github.com/antoniojps/github-dependencies/issues/new/choose"
              target="_blank"
              rel="noreferrer"
            >
              open a github issue
            </a>{' '}
            if you think this should be fixed.
          </Text>
        </div>
      </div>
    );

  console.log({ isProlongedLoading });

  return (
    <div className={styles.editor}>
      {isLoading ? <Breather>{renderKnobs()}</Breather> : renderKnobs()}
      <AnimatePresence exitBeforeEnter initial={false}>
        {isLoading ? (
          <motion.div
            style={{
              backgroundColor: 'transparent',
              visibility: isProlongedLoading ? 'visible' : 'hidden',
            }}
            className={styles.messageContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            key="chart-loading"
          >
            <Breather>
              <Text h3>Fetching your top dependencies</Text>
              <Spacer y={0.2} />
              <Progress value={progress * 100} className={styles.progress} type="success" />
            </Breather>
          </motion.div>
        ) : (
          <motion.div
            style={{ backgroundColor }}
            className={styles.chart}
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
  );
};
