import { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import '@/styles/global.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Preloader from '@/components/preloader';
import classNames from 'classnames';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <Provider store={store}>
      <Preloader loading={loading} />
      <div className={classNames(loading ? `opacity-0` : `opacity-100`)}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
