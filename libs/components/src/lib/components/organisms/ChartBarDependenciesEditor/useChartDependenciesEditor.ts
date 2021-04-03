import { useState, useEffect, useMemo } from 'react';
import { ColorSchemeId } from '@nivo/colors';

const MILISECONDS_PROLONGED = 200;

export function useChartDependenciesEditor({ isLoading }: { isLoading: boolean }) {
  const [colorScheme, setColorScheme] = useState<ColorSchemeId>('set3');
  const [enableGrid, setEnableGrid] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('rgb(0,0,0)');
  const [gridColor, setGridColor] = useState('rgba(255,255,255,0.2)');
  const [loadingMs, setLoadingMs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoading) {
        setLoadingMs((ms) => ms + MILISECONDS_PROLONGED);
      } else {
        setLoadingMs(0);
        clear();
      }
    }, MILISECONDS_PROLONGED / 2);

    function clear() {
      clearInterval(interval);
    }

    return clear;
  }, [isLoading]);

  // only show loading progress bar if is prolonged loading
  const isProlongedLoading = useMemo(() => loadingMs >= MILISECONDS_PROLONGED, [loadingMs]);

  return [
    { colorScheme, enableGrid, backgroundColor, gridColor, isProlongedLoading },
    { setColorScheme, setEnableGrid, setBackgroundColor, setGridColor },
  ];
}
