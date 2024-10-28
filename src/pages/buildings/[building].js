import React, { useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import BackButton from '@/components/BackButton'; // Adjust the path as necessary
import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';
import { selectBuilding } from '../../../store/features/buildingSlice';
import Image from 'next/image';

import { useDispatch } from 'react-redux';
// import { useImagePreloader } from '@/hooks/useImagePreloader'; // Import the custom hook
// import ThreeDotsWave from '@/components/three-dots-wave';

const buttonPositions = {
  'building1': {
      'Garazha dhe depo': { top: '75%', left: '48%' },
      'Afarizem SU': { top: '68%', left: '48%' },
      'Afarizem P': { top: '61%', left: '48%' },
      'Kati karakteristik': { top: '54%', left: '48%' }
  
  },
  'building2': {
    'Garazha dhe depo': { top: '75%', left: '48%' },
      'Afarizem SU': { top: '68%', left: '48%' },
      'Afarizem P': { top: '61%', left: '48%' },
      'Kati karakteristik': { top: '54%', left: '48%' }
  
  },
  'building3': {
      'Afarizem P': { top: '75%', left: '49%' },
      'Baza e katit 1': { top: '68%', left: '49%' },
      'Kati karakteristik': { top: '61%', left: '49%' },
  },
  'building4': {
    'Afarizem P': { top: '75%', left: '49%' },
    'Baza e katit 1': { top: '68%', left: '49%' },
    'Kati karakteristik': { top: '61%', left: '49%' },
},
  'building5': {
      'Afarizem P': { top: '73%', left: '49%' },
      'Kati karakteristik': { top: '55%', left: '49%' }
  },
  'building6': {
    'Townhouses': { top: '71%', left: '49%' },
      'Kati karakteristik': { top: '63%', left: '49%' },
  },
  'building7': {
      'Townhouses': { top: '71%', left: '29%' },
      'Kati karakteristik': { top: '63%', left: '29%' },
  },

};

const Building = () => {
  const isLandscape = useOrientation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { building: buildingId } = router.query;
  const buildings = useSelector(state => state.building.buildings);
  const currentBuilding = buildings.find(b => b.id.toString() === buildingId);

  if (!currentBuilding) {
    return <p>Building not found</p>;
  }

  useEffect(() => {
    if (buildingId) {
      dispatch(selectBuilding(buildingId));
    }
  }, [buildingId, dispatch]);
  
  const floors = useMemo(() => {
    return buttonPositions[`building${buildingId}`] || {};
  }, [buildingId]);
  

  if (!isLandscape) {
    return <RotateMessage />;
  }


  return (
    <>
    <div className="bg-white h-screen relative">
   
      <div 
        className="absolute w-full h-full bg-no-repeat bg-center z-10" 
        
      >
        <Image
      src={currentBuilding.imagePath}
      alt={`Building ${buildingId}`}
      layout="fill"
      objectFit="contain"
      priority 
    />
     <BackButton />
        {Object.entries(floors).map(([floorName, position]) => (
          <Link href={`/floors/building${buildingId}-${floorName}`}
          key={floorName}
          className="absolute bg-blue-500 text-white rounded p-2 sm:p-1 sm:text-sm"
          style={{ top: position.top, left: position.left }}
          >
      
            {floorName}
 
        </Link>
        ))}
       

      </div>
    </div>
    </>
  );
};

export default Building;