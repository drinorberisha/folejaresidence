import React from 'react';
import '../../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import {NextUIProvider} from '@nextui-org/react';
import GoogleAnalytics from '@/components/google/GoogleAnalytics';

import imagePaths from './imagePaths.json';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import ThreeDotsWave from '@/components/three-dots-wave';

function MyApp({ Component, pageProps }) {
  const { isLoading } = useImagePreloader(imagePaths);

  if(isLoading) return <div>Loading ...</div>;
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
