import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { CssBaseline } from '@geist-ui/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#09151f" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
