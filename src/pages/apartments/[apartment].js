import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import HomeButton from '@/components/HomeButton';
import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';

import { MdSwapVert } from 'react-icons/md'; // Importing the switch icon


const Apartment = () => {
  const isLandscape = useOrientation();
  const router = useRouter();
  const { apartment } = router.query;

  const [isAlternateImage, setIsAlternateImage] = useState(false);

  const extractInfoFromURL = (apartment) => {
    const parts = apartment ? apartment.split('-') : [];
    const building = parts[0];
    const floor = parts.slice(1, -1).join(' ');
    const apartmentIndex = parts[parts.length - 1];
    return { building, floor, apartmentIndex };
  };

  const { building, floor, apartmentIndex } = extractInfoFromURL(apartment);

  // Determine if the "Switch" button should be displayed
  const shouldDisplaySwitchButton = () => {
    if (building === 'building7' && floor === 'Townhouses' && apartmentIndex >= 1 && apartmentIndex <= 9) {
      return true;
    }
    if (building === 'building6' && floor === 'Townhouses Perdhese' && apartmentIndex >= 1 && apartmentIndex <= 6) {
      return true;
    }
    return false;
  };

  const getImagePath = (building, floor, apartmentIndex, isAlternateImage) => {
    // const cloudFrontDomain = 'd124q86xsdw2f2.cloudfront.net';
    let basePath = `/foto/banesat/${building}/${floor}/apartment${apartmentIndex}`;
    if (isAlternateImage) {
      basePath = `/foto/banesat/${building}/Townhouses Kati 1/apartment${apartmentIndex}`; // Adjust the path for the alternate folder
    }
    return `${basePath}.png`;
  };

  const imagePath = getImagePath(building, floor, apartmentIndex, isAlternateImage);

  if (!isLandscape) {
    return <RotateMessage />;
  }

  return (
    <div className="bg-white h-screen relative">
      <div className="absolute top-0 left-0 z-20 p-4">
        <BackButton />
      </div>
      <div className="absolute top-14 left-0 z-20 p-4">
        <HomeButton />
      </div>

      {shouldDisplaySwitchButton() && (
        <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 z-30">
         <button 
            onClick={() => setIsAlternateImage(!isAlternateImage)} 
            className="bg-blue-500 text-white p-2 rounded mt-4 flex items-center justify-center"
            aria-label="Switch Image"
          >
            <MdSwapVert className="text-2xl" /> {/* Adjust the icon size as needed */}
          </button>
        </div>
      )}

      <div className="h-full w-full flex justify-center items-center overflow-hidden">
        <Image 
          src={imagePath}
          alt={`Apartment Image`}
          layout="fill"
          objectFit="contain"
          quality={100}
          unoptimized={true}
        />
      </div>
      {/* Additional content */}
    </div>
  );
};

export default Apartment;
