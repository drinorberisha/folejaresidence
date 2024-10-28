import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
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
  'building7-Kati karakteristik': [{ top: '54%', left: '22%' }, { top: '32%', left: '32%' }, { top: '54%', left: '32%' },{ top: '54%', left: '48%' },{ top: '32%', left: '48%' },{ top: '54%', left: '57%' },/* ... */],
  'building6-Townhouses':[{ top: '18%', left: '32%' },{ top: '35%', left: '28%' },{ top: '43%', left: '34%' },{ top: '50%', left: '45%' },{ top: '50%', left: '55%' },{ top: '50%', left: '62%' },{ top: '30%', left: '55%' },],
  'building7-Townhouses':[{ top: '30%', left: '22%' },{ top: '57%', left: '22%' },{ top: '57%', left: '30%' },{ top: '30%', left: '32%' },{ top: '57%', left: '40%' },{ top: '57%', left: '47%' },{ top: '57%', left: '57%' },{ top: '30%', left: '57%' },{ top: '30%', left: '47%' },],
};


const Floors = () => {
  const isLandscape = useOrientation(); // use the hook

  const router = useRouter();
  const { floor } = router.query; // "building1-Kati karakteristik"
  const [selectedBuilding, ...floorNameArray] = floor ? floor.split('-') : [];
  const floorName = floorNameArray.join('-');

  const floors = useSelector(state => state.floor.floorsByBuilding[`${selectedBuilding}`]);
  const currentFloor = floors?.find(f => f.name === floorName);


  if (!currentFloor) {
    return <p>Floor not found</p>;
  }

  const positionKey = useMemo(
    () => `${selectedBuilding}-${currentFloor.name}`,
    [selectedBuilding, currentFloor.name]
  );
  
  const currentPositions = useMemo(
    () => apartmentPositions[positionKey] || [],
    [positionKey]
  );

  const getTypeForApartment = (index) => {
    // Assuming index starts from 0, adjust if your index starts from 1
    const types = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return types[index] || `Tipi ${index + 1}`; // Fallback to numeric types if you run out of letters
  };

  const isDuplex = floorName === 'Townhouses Perdhese' || floorName === 'Townhouses';
  



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
          <Link href={`/apartments/${positionKey}-${index + 1}`}
          key={index}
          className="absolute bg-blue-500 text-white rounded p-4 sm:p-2 sm:text-xs"
          style={{ top: pos.top, left: pos.left }}>
          
            {isDuplex ? `Duplex ${getTypeForApartment(index)}` : `Tipi ${getTypeForApartment(index)}`}
        </Link>
        ))}
      </div>
      {/* Additional content */}
    </div>
    </>
  );
};

export default Floors;
