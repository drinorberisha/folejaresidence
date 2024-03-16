import Image from 'next/image';
import React, { useState } from 'react';

const Carousel = ({ media, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const renderMedia = (item) => {
    if (item.type === 'image') {
      return <Image src={item.src} width={960} height={720} alt={`Slide ${currentIndex}`} />;
    } else if (item.type === 'video') {
      return (
        <video width="960" height="720" controls preload="auto" loop>
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded overflow-hidden modal-container">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 bg-red-600 text-white rounded-full p-1 text-lg">
          X
        </button>
        <button onClick={prev} className="carousel-prev">&#10094;</button>
        {renderMedia(media[currentIndex])}
        <button onClick={next} className="carousel-next">&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel;
