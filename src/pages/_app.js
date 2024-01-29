import React from 'react';
import '../../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {
  return( 
  <Provider store={store}>
    <Component {...pageProps} />
    <SpeedInsights/>
    <Analytics/>
  </Provider>)
}

export default MyApp;
