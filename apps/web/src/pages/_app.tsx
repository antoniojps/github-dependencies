import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { Theme } from '@github-graphs/components';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@github-graphs/components/containers/Theme/Theme.scss';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Theme>
      <NextAuthProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </NextAuthProvider>
    </Theme>
  );
}

export default MyApp;
