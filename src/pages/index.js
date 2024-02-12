// index.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { selectBuilding } from '../../store/features/buildingSlice';

import Link from 'next/link';
import BuildingButton from '@/components/BuildingButton';
import Modal from '@/components/Modal';
import Carousel from '@/components/Carousel';
import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';

import Head from 'next/head';
// import { preloadImages } from '@/utils/preloadImages';


import {Skeleton} from "@nextui-org/react";
import MyNavbar from '@/components/MyNavbar';


const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const buildings = useSelector((state) => state.building.buildings);
  const isLandscape = useOrientation(); // use the hook

  // State and handlers
  const [openModal, setOpenModal] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

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


  if (!isLandscape) {
    return <RotateMessage />;
  }
  return (
    <>
      <Head>
        <title>Foleja Residence</title>
      </Head>
      <MyNavbar/>

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

      <Modal isOpen={openModal === 'modal1'} onClose={closeModal} imageUrl={imageUrl1}> 
        <Skeleton className='rounded'/>
      </Modal>
      
      <Modal isOpen={openModal === 'modal2'} onClose={closeModal} imageUrl={imageUrl2}>
        <Skeleton className='rounded'/>
      </Modal>
        
      <Carousel images={images} isOpen={isCarouselOpen} onClose={closeCarousel}> 
        <Skeleton className='rounded'/>
      </Carousel>
    </div>
    </>
  );
};

export default Home;
