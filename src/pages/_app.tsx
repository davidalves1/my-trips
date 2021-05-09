import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import GlobalStyles from '@styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: customize this tags for your project */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress color="#00adb5" height={3} stopDelayMs={200} startPosition={0.15} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
