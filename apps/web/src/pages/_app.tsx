import { ReactElement, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Theme } from '@github-graphs/components';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { registerGoogleTracking } from '../libs/ga-tracking';
import '@github-graphs/components/containers/Theme/Theme.scss';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();
  useEffect(() => {
    const unregisterGoogleTracking = registerGoogleTracking(router);
    return unregisterGoogleTracking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
