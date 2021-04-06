import React, { useMemo, ReactElement } from 'react';
import Head from 'next/head';
import { SITE_METADATA } from './Seo.data';
import { useRouter } from 'next/router';

type SeoProps = {
  title?: string;
  titleShouldAppend?: boolean;
  description?: string;
};

const defaultImg = SITE_METADATA.url + SITE_METADATA.image.src;

export const Seo = ({ title, description, titleShouldAppend = true }: SeoProps): ReactElement => {
  const computedTitle = useMemo(() => {
    if (title && titleShouldAppend) return `${title} - ${SITE_METADATA.title}`;
    if (title) return `${title}`;
    return SITE_METADATA.title;
  }, [title, titleShouldAppend]);

  const { asPath } = useRouter();

  return (
    <Head>
      <title>{computedTitle}</title>
      <meta
        name="description"
        key="description"
        content={description || SITE_METADATA.description}
      />
      <meta name="keywords" key="keywords" content={SITE_METADATA.keywords.join(' ')} />
      {/* Facebook & search engines */}
      <meta property="og:url" key="og:url" content={`${SITE_METADATA.url}${asPath}`} />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:title" key="og:title" content={computedTitle} />
      <meta
        property="og:description"
        key="og:description"
        content={description || SITE_METADATA.description}
      />
      <meta property="og:site_name" key="og:site_name" content={computedTitle} />
      <meta property="og:image" key="og:image" content={defaultImg} />
      <meta
        property="og:image:width"
        key="og:image:width"
        content={`${SITE_METADATA.image.width}`}
      />
      <meta
        property="og:image:height"
        key="og:image:height"
        content={`${SITE_METADATA.image.height}`}
      />

      {/* Twitter */}
      <meta property="twitter:card" key="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" key="twitter:url" content={`${SITE_METADATA.url}${asPath}`} />
      <meta property="twitter:title" key="twitter:title" content={computedTitle} />
      <meta
        property="twitter:description"
        key="twitter:description"
        content={description || SITE_METADATA.description}
      />
      <meta property="twitter:image" key="twitter:image" content={defaultImg} />
    </Head>
  );
};
