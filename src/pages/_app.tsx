import { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import '@/styles/global.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Preloader from '@/components/preloader';
import classNames from 'classnames';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Dva Drakona</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Preloader loading={loading} />
      <div className={classNames(loading ? `opacity-0` : `opacity-100`)}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
