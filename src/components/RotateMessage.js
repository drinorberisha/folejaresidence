// RotateMessage.js
import React, { useState, useEffect } from 'react';

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

const RotateMessage = () => {
  const isLandscape = useOrientation();
  const [showRotateMessage, setShowRotateMessage] = useState(false);

  useEffect(() => {
    setShowRotateMessage(!isLandscape);
  }, [isLandscape]);

  if (!showRotateMessage) return null;

  return (
    <div className="rotate-message">
      <video autoPlay loop muted playsInline>
        <source src="/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      Please rotate your device to horizontal view for the best experience
    </div>
  );
};

export default RotateMessage;
