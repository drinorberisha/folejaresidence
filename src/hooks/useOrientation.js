import { useState, useEffect } from 'react';

const useOrientation = () => {
  // Initialize state with undefined, so it will only be computed client-side
  const [isLandscape, setIsLandscape] = useState(undefined);

  useEffect(() => {
    const getOrientation = () => {
      return window.innerWidth > window.innerHeight;
    };

    // Set initial orientation
    setIsLandscape(getOrientation());

    const handleResize = () => {
      setIsLandscape(getOrientation());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLandscape;
};

export default useOrientation;
