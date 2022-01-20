import { useEffect } from 'react';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import theme from 'ui/themes/theme';
import Header from 'ui/components/surfaces/Header/Header';
import Footer from 'ui/components/surfaces/Footer/Footer';
import { AppContainer } from '@styles/pages/_app.style';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, []);

  return (
    <>
      <Head>
        <title>e-Diaristas {pageProps.title && ` - ${pageProps.title}`}</title>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
