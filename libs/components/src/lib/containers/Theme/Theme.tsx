// implements geist-ui theme and our css vars
// read more here: https://react.geist-ui.dev/en-us/guide/themes

import React, { ReactNode, ReactElement } from 'react';
import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react';

type ThemeProps = {
  children: ReactNode;
};

export const theme = Themes.createFromDark({
  type: 'github-graphs-theme',
  palette: {
    background: '#09151F',
  },
});

export const Theme = ({ children }: ThemeProps): ReactElement => {
  return (
    <GeistProvider themes={[theme]} themeType="github-graphs-theme">
      <CssBaseline />
      {children}
    </GeistProvider>
  );
};
