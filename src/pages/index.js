// index.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { selectBuilding } from '../../store/features/buildingSlice';

import Link from 'next/link';
import BuildingButton from '@/components/BuildingButton';
import Modal from '@/components/Modal';
import Carousel from '@/components/Carousel';

// useOrientation Hook
const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(undefined);

  useEffect(() => {
    const getOrientation = () => {
      return window.innerWidth > window.innerHeight;
    };

    setIsLandscape(getOrientation());

    const handleResize = () => {
      setIsLandscape(getOrientation());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLandscape;
};

// Home Component
const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const buildings = useSelector((state) => state.building.buildings);
  const isLandscape = useOrientation(); // Hook is called here, unconditionally

  // State and handlers
  const [openModal, setOpenModal] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [showRotateMessage, setShowRotateMessage] = useState(false);

  // Handle building click
  const handleBuildingClick = (buildingId) => {
    dispatch(selectBuilding(buildingId));
    router.push(`/buildings/${buildingId}`);
  };

  // Show modal and carousel handlers
  const showModal = (modalId) => setOpenModal(modalId);
  const closeModal = () => setOpenModal(null);
  const openCarousel = () => setIsCarouselOpen(true);
  const closeCarousel = () => setIsCarouselOpen(false);

  // Image URLs and array
  const imageUrl1 = '/foto/baneri.jpg';
  const imageUrl2 = '/foto/situacioni.png';
  const images = ['/foto/punimet/foto11.jpeg', '/foto/punimet/foto12.jpeg', '/foto/punimet/foto13.jpeg', '/foto/punimet/foto14.jpeg'];

  // Update rotate message state based on orientation
  useEffect(() => {
    setShowRotateMessage(!isLandscape);
  }, [isLandscape]);

  // Conditional rendering for rotate message
  if (showRotateMessage) {
    return (
      <div className="rotate-message">
        <video autoPlay loop muted playsInline>
          <source src="/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }


  return (
    <div className="viewport relative">
      {buildings.map((building) => (
        <BuildingButton
          key={building.id}
          buildingId={building.id}
          label={building.name}
          onClick={handleBuildingClick}
        />
      ))}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <button onClick={() => showModal('modal1')} className="p-2 bg-blue-500 text-white rounded block">
          Investitoret
        </button>
        <button onClick={() => showModal('modal2')} className="p-2 bg-blue-500 text-white rounded block">
          Situacioni
        </button>
        <button onClick={openCarousel} className="p-2 bg-blue-500 text-white rounded block">
          Shiko Punimet
        </button>
      </div>
      <Modal isOpen={openModal === 'modal1'} onClose={closeModal} imageUrl={imageUrl1} />
      <Modal isOpen={openModal === 'modal2'} onClose={closeModal} imageUrl={imageUrl2} />
      <Carousel images={images} isOpen={isCarouselOpen} onClose={closeCarousel} />
    </div>
  );
};

export default Home;
