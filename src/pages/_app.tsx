import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: customize this tags for your project */}
        <title>My Awesome App - Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Describe your project here" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
