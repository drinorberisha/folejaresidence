import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import HomeButton from '@/components/HomeButton';
import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';

const apartmentPositions = {
  'building1-Kati karakteristik': [{ top: '54%', left: '22%' }, { top: '54%', left: '32%' }, { top: '34%', left: '32%' },{ top: '34%', left: '48%' },{ top: '54%', left: '48%' },{ top: '54%', left: '57%' },/* ... */],
  'building2-Kati karakteristik': [{ top: '54%', left: '39%' }, { top: '32%', left: '38%' }, { top: '21%', left: '47%' },{ top: '30%', left: '57%' },{ top: '54%', left: '55%' },],
  'building3-Kati karakteristik': [{ top: '54%', left: '22%' }, { top: '54%', left: '32%' }, { top: '34%', left: '32%' },{ top: '34%', left: '48%' },{ top: '54%', left: '48%' },{ top: '54%', left: '57%' },/* ... */],
  'building4-Kati karakteristik': [{ top: '54%', left: '22%' }, { top: '54%', left: '32%' }, { top: '34%', left: '32%' },{ top: '34%', left: '48%' },{ top: '54%', left: '48%' },{ top: '54%', left: '57%' },/* ... */],
  'building5-Kati karakteristik': [{ top: '54%', left: '22%' }, { top: '34%', left: '32%' }, { top: '54%', left: '32%' },{ top: '54%', left: '48%' },{ top: '34%', left: '48%' },{ top: '54%', left: '57%' },/* ... */],
  'building6-Kati karakteristik': [{ top: '50%', left: '30%' }, { top: '28%', left: '34%' }, { top: '53%', left: '42%' },{ top: '54%', left: '55%' },{ top: '30%', left: '57%' },],
  'building7-Kati karakteristik': [{ top: '54%', left: '22%' }, { top: '34%', left: '32%' }, { top: '54%', left: '32%' },{ top: '54%', left: '48%' },{ top: '34%', left: '48%' },{ top: '54%', left: '57%' },/* ... */],
  'building3-Afarizem P':[{ top: '30%', left: '22%' },{ top: '54%', left: '22%' },{ top: '54%', left: '30%' },{ top: '30%', left: '32%' },{ top: '54%', left: '40%' },{ top: '54%', left: '47%' },{ top: '54%', left: '57%' },{ top: '30%', left: '57%' },{ top: '30%', left: '47%' },],
  'building4-Afarizem P':[{ top: '30%', left: '22%' },{ top: '54%', left: '22%' },{ top: '54%', left: '30%' },{ top: '30%', left: '32%' },{ top: '54%', left: '40%' },{ top: '54%', left: '47%' },{ top: '54%', left: '57%' },{ top: '30%', left: '57%' },{ top: '30%', left: '47%' },],
  'building6-Afarizem P':[{ top: '22%', left: '35%' },{ top: '44%', left: '26%' },{ top: '51%', left: '32%' },{ top: '54%', left: '43%' },{ top: '54%', left: '54%' },{ top: '54%', left: '62%' },{ top: '32%', left: '62%' }],
  'building7-Afarizem P':[{ top: '30%', left: '22%' },{ top: '54%', left: '22%' },{ top: '54%', left: '30%' },{ top: '30%', left: '32%' },{ top: '54%', left: '40%' },{ top: '54%', left: '47%' },{ top: '54%', left: '57%' },{ top: '30%', left: '57%' },{ top: '30%', left: '47%' },],
  'building6-Baza e katit 1':[{ top: '57%', left: '44%' },{ top: '37%', left: '53%' },{ top: '35%', left: '37%' },],
  'building7-Baza e katit 1':[{ top: '30%', left: '22%' },{ top: '54%', left: '22%' },{ top: '54%', left: '30%' },{ top: '30%', left: '32%' },{ top: '54%', left: '40%' },{ top: '54%', left: '47%' },{ top: '54%', left: '57%' },{ top: '30%', left: '57%' },{ top: '30%', left: '47%' },],
};


const Floors = () => {
  const router = useRouter();
  const { floor: floorName } = router.query;
  const selectedBuildingId = useSelector(state => state.building.selectedBuilding);
  const floors = useSelector(state => state.floor.floorsByBuilding[`building${selectedBuildingId}`]);

  const currentFloor = floors?.find(floor => floor.name === floorName);

  const isLandscape = useOrientation(); // use the hook


  if (!currentFloor) {
    return <p>Floor not found</p>;
  }

  const positionKey = `building${selectedBuildingId}-${currentFloor.name}`;
  const currentPositions = apartmentPositions[positionKey] || [];

  const handleApartmentClick = (apartmentIndex) => {
    // Navigate to the apartment page with a specific identifier
    router.push(`/apartments/${positionKey}-${apartmentIndex + 1}`);
  };


  if (!isLandscape) {
    return <RotateMessage />;
  }

  return (
    <>
    <div className="bg-white h-screen relative">
      <div className="absolute z-20 p-4">
        <BackButton />
      </div>
      <div className="absolute top-14 left-0 z-20 p-4">
        <HomeButton />
      </div>
      <div className="h-full w-full flex justify-center items-center overflow-hidden">
        {currentFloor.imagePath && (
          <Image 
            src={currentFloor.imagePath}
            alt={`Image of ${currentFloor.name}`}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
          
        )}
        {currentPositions.map((pos, index) => (
          <button
            key={index}
            className="absolute bg-blue-500 text-white rounded p-4 sm:p-2 sm:text-xs" // Larger size for larger screens, smaller for sm screens
            style={{ top: pos.top, left: pos.left }}
            onClick={() => handleApartmentClick(index)}
          >
            Banesa {index + 1}
          </button>
        ))}
      </div>
      {/* Additional content */}
    </div>
    </>
  );
};

export default Floors;
