import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { Theme } from '@github-graphs/components';
import '@github-graphs/components/containers/Theme/Theme.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
