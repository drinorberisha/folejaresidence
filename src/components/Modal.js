// components/Modal.js
import React from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded overflow-hidden modal-container">
        <button 
          onClick={onClose} 
          className="absolute top-0 right-0 m-2 bg-red-600 text-white rounded-full p-1 text-lg"
        >
          X
        </button>
        <div className="modal-content">
          <Image src={imageUrl} width={920} height={600} loading='lazy' alt="Modal Content"/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
