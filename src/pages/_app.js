import React , {useState, useEffect}from 'react';
import dynamic from 'next/dynamic'; 
import '../../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import {NextUIProvider} from '@nextui-org/react';
import GoogleAnalytics from '@/components/google/GoogleAnalytics';

const ThreeDotsWave = dynamic(() => import('@/components/three-dots-wave'), {
  ssr: false,
});import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (loading) {
    return <ThreeDotsWave />;
  }
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
