import { useState } from 'react';
import { ColorSchemeId } from '@nivo/colors';

export function useChartDependenciesEditor() {
  const [colorScheme, setColorScheme] = useState<ColorSchemeId>('set3');
  const [enableGrid, setEnableGrid] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('rgb(0,0,0)');
  const [gridColor, setGridColor] = useState('rgba(255,255,255,0.2)');

  return [
    { colorScheme, enableGrid, backgroundColor, gridColor },
    { setColorScheme, setEnableGrid, setBackgroundColor, setGridColor },
  ];
}
