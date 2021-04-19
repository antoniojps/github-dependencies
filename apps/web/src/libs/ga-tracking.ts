import ReactGA from 'react-ga';
import { SITE_METADATA } from '../containers/Seo/Seo.data';
import { NextRouter } from 'next/router';

export const registerGoogleTracking = (router: NextRouter) => {
  const handleRouteChange = (url: string) => ReactGA.pageview(url);

  ReactGA.initialize(SITE_METADATA['google-analytics']);
  ReactGA.pageview(router.asPath);

  router.events.on('routeChangeComplete', handleRouteChange);

  return () => {
    router.events.off('routeChangeComplete', handleRouteChange);
  };
};
