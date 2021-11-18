import { AppProps } from 'next/app';
import '@/styles/global.scss';
import 'bootstrap/scss/bootstrap-grid.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
