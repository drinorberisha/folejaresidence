// pages/apartments/[apartment].js
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import HomeButton from '@/components/HomeButton';
import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';

const Apartment = () => {
  const router = useRouter();
  const { apartment } = router.query; // "building1-Kati karakteristik-2"
  const isLandscape = useOrientation(); // use the hook

  // Function to extract building, floor, and apartment index from the URL
  const extractInfoFromURL = (apartment) => {
    const parts = apartment ? apartment.split('-') : [];
    const building = parts[0]; // "building1"
    const floor = parts.slice(1, -1).join(' '); // "Kati karakteristik"
    const apartmentIndex = parts[parts.length - 1]; // "2"
    return { building, floor, apartmentIndex };
  };

  const { building, floor, apartmentIndex } = extractInfoFromURL(apartment);

  // Function to determine the correct image path based on building, floor, and apartment index
  const getImagePath = (building, floor, apartmentIndex) => {
    
    // Logic to determine the image path
    // This is where you'll map the combination of building, floor, and apartment index to an image path
    // For example:
    return `/foto/banesat/${building}/${floor}/apartment${apartmentIndex}.png`;
  };

  const imagePath = getImagePath(building, floor, apartmentIndex);




  if (!isLandscape) {
    return <RotateMessage />;
  }
  return (
    <>
    <div className="bg-white h-screen relative">
        <div className="absolute top-0 left-0 z-20 p-4">
        <BackButton />
      </div>
      <div className="absolute top-14 left-0 z-20 p-4">
        <HomeButton />
      </div>

    <div className="h-full w-full flex justify-center items-center overflow-hidden">
      <Image 
        src={imagePath}
        alt={`Apartment Image`}
        layout="fill"
        objectFit="contain"
        quality={100}
      />
    </div>
    {/* Additional content */}
  </div>
  </>
);
};

export default Apartment;
