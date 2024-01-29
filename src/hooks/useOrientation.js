// hooks/useOrientation.js
import { useState, useEffect } from 'react';

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(undefined);

  useEffect(() => {
    const getOrientation = () => window.innerWidth > window.innerHeight;
    setIsLandscape(getOrientation());

    const handleResize = () => setIsLandscape(getOrientation());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLandscape;
};

export default useOrientation;
