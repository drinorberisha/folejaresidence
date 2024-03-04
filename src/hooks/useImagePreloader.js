// hooks/useImagePreloader.js

import { useState, useEffect } from 'react';
import { preloadImages } from '../utils/preloadImages'; // Adjust the path as needed

export const useImagePreloader = (imageList) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    preloadImages(imageList).then(() => {
      setIsLoading(false);
    }).catch(error => {
      console.error("Failed to preload images:", error);
      setError(error);
      setIsLoading(false);
    });
  }, [imageList]);

  return { isLoading, error };
};
