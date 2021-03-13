import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { Theme } from '@github-graphs/components';
import { Provider as NextAuthProvider } from 'next-auth/client';

import '@github-graphs/components/containers/Theme/Theme.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Theme>
      <NextAuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </NextAuthProvider>
    </Theme>
  );
}

export default MyApp;
