import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageModal = ({ isOpen, onClose, images }) => {
    const [activeImage, setActiveImage] = useState(0);
    const [modalStyle, setModalStyle] = useState({});
  
    useEffect(() => {
      const calculateAspectRatioFit = () => {
        const srcWidth = 16;
        const srcHeight = 9;
        const maxWidth = window.innerWidth * 0.9; // 90% of viewport width
        const maxHeight = window.innerHeight * 0.9; // 90% of viewport height
  
        const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  
        return { width: srcWidth * ratio, height: srcHeight * ratio };
      };
  
      if (isOpen) {
        const { width, height } = calculateAspectRatioFit();
        setModalStyle({
          width: `${width}px`,
          height: `${height}px`,
        });
      }
    }, [isOpen]);
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-4 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="relative bg-white rounded-lg shadow-lg" style={modalStyle}>
    <button onClick={onClose} className="absolute top-6 right-6 text-yellow z-50 font-bold text-2xl">✕</button>
        <div className="absolute top-3 left-3 flex space-x-2 z-50">
          {images.map((_, index) => (
            <button
              key={index}
              className={`p-2 rounded ${activeImage === index ? 'bg-[#cea047] text-white' : 'bg-transparent text-black hover:bg-gray-400 hover:text-white'}`}              onClick={() => setActiveImage(index)}
            >
              {`Oferta ${index + 1}`}
            </button>
          ))}
        </div>
        <Image
          src={images[activeImage]}
          alt="Dynamic background"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;
