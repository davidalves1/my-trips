import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: customize this tags for your project */}
        <title>Minhas Viagens</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="description" content="Describe your project here" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
