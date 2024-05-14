// index.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { selectBuilding } from '../../store/features/buildingSlice';

import Link from 'next/link';
import BuildingButton from '@/components/BuildingButton';
import Modal from '@/components/Modal';
import Carousel from '@/components/Carousel';
import ImageModal from '@/components/ImageModal';

import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';



import Head from 'next/head';
// import { preloadImages } from '@/utils/preloadImages';


import {Skeleton} from "@nextui-org/react";
import config from '../../config';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const buildings = useSelector((state) => state.building.buildings);
  const isLandscape = useOrientation(); // use the hook

  // State and handlers
  const [openModal, setOpenModal] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
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
  const imageUrl1 = `${config.cF}/foto/baneri.jpg`;
  const imageUrl2 = `${config.cF}/foto/situacioni.png`;
  const images = [
  { type: 'image', src: `${config.cF}/foto/punimet/f222.png` },
  { type: 'image', src: `${config.cF}/foto/punimet/f2.jpeg` },
  { type: 'image', src: `${config.cF}/foto/punimet/f1.jpeg` },
  { type: 'image', src: `${config.cF}/foto/punimet/f3.jpeg` },
  { type: 'image', src: `${config.cF}/foto/punimet/f4.jpeg` },
  { type: 'image', src: `${config.cF}/foto/punimet/foto11.jpeg` },
  { type: 'image', src: `${config.cF}/foto/punimet/foto12.jpeg` },
  ];


  const [isSecondCarouselOpen, setIsSecondCarouselOpen] = useState(false);


  // Second set of images for the new carousel
  const secondImages = [
    { type: 'image', src: `${config.cF}/foto/karusel2/k1.jpg` },
    { type: 'image', src: `${config.cF}/foto/karusel2/k2.jpg` },
    { type: 'image', src: `${config.cF}/foto/karusel2/k3.jpg` },
    { type: 'image', src: `${config.cF}/foto/karusel2/k4.jpg` },
    { type: 'image', src: `${config.cF}/foto/karusel2/k5.jpg` },
    { type: `image`, src: `${config.cF}/foto/karusel2/k6.jpg` },
    { type: `image`, src: `${config.cF}/foto/karusel2/k7.jpg` },
    { type: `image`, src: `${config.cF}/foto/karusel2/k8.jpg` },
    { type: `image`, src: `${config.cF}/foto/karusel2/k9.jpg` },
    { type: `image`, src: `${config.cF}/foto/karusel2/k10.jpg` },
    { type: `image`, src: `${config.cF}/foto/karusel2/k11.jpg` },
  ]

  const mobileImages = [ `${config.cF}/foto/imagemodal/oferta4.jpeg`, `${config.cF}/foto/imagemodal/oferta111.jpeg`, `${config.cF}/foto/imagemodal/k4.jpeg`];


  if (!isLandscape) {
    return <RotateMessage />;
  }
  
  return (
    <>
      <Head>
        <title>Foleja Residence</title>
      </Head>
      


      <div className="viewport relative">
      {buildings.map((building) => (
        <BuildingButton
          key={building.id}
          buildingId={building.id}
          label={building.name}
          onClick={handleBuildingClick}
        />
      ))}
      <div className="bg-white rounded-lg py-2 px-4 max-w-xl md:max-w-2xl mx-auto shadow-lg border border-gray-200 relative top-[20px]">
  <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#FFD700]">Foleja Residence - Jaglanice, Prizren.</h1>
</div>

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
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
          <button onClick={() => setIsImageModalOpen(true)} className="p-2 bg-blue-500 text-white rounded block">
          Çmimet dhe Ofertat
          </button>
          {/* <button onClick={() => setIsSecondCarouselOpen(true)} className="p-2 bg-blue-500 text-white rounded block">
            Zbulo fshehtesine
          </button> */}
      </div>

      <Modal isOpen={openModal === 'modal1'} onClose={closeModal} imageUrl={imageUrl1}> 
        <Skeleton className='rounded'/>
      </Modal>
      
      <Modal isOpen={openModal === 'modal2'} onClose={closeModal} imageUrl={imageUrl2}>
        <Skeleton className='rounded'/>
      </Modal>
        
      <Carousel media={images} isOpen={isCarouselOpen} onClose={closeCarousel} >
        <Skeleton className='rounded'/>
      </Carousel>

      <Carousel media={secondImages} isOpen={isSecondCarouselOpen} onClose={() => setIsSecondCarouselOpen(false)}>
          <Skeleton className='rounded'/>
      </Carousel>
        
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        images={mobileImages}
      />
    </div>
    </>
  );
};

export default Home;
