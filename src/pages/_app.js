import React from 'react';
import '../../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import {NextUIProvider} from '@nextui-org/react';
import GoogleAnalytics from '@/components/google/GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  return( 
    <NextUIProvider>
      <Provider store={store}>
        <GoogleAnalytics/>
        <Component {...pageProps} />
        <SpeedInsights/>
        <Analytics/>
      </Provider>
    </NextUIProvider>)
}

export default MyApp;
