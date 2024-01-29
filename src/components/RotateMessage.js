// RotateMessage.js
import React from 'react';

const RotateMessage = () => {
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
