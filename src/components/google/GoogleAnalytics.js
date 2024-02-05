// components/GoogleAnalytics.js

import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Replace 'UA-XXXXXXXXX-X' with your actual tracking ID
    const trackingId = 'G-MVYHMEPS00';

    // Include the gtag script in the head of the document
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', trackingId);
    };

    document.head.appendChild(script);
  }, []);

  return null;
};

export default GoogleAnalytics;
