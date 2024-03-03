// components/Carousel.js
import Image from 'next/image';
import React, { useState } from 'react';

const Carousel2 = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded overflow-hidden modal-container1">
        <button 
          onClick={onClose} 
          className="absolute top-0 right-0 m-2 bg-red-600 text-white rounded-full p-1 text-lg"
        >
          X
        </button>
        <button onClick={prev} className="carousel-prev">&#10094;</button>
        <Image src={images[currentIndex]} width={428} height={850} className="foto3" alt={`Slide ${currentIndex}`} />
        <button onClick={next} className="carousel-next">&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel2;
