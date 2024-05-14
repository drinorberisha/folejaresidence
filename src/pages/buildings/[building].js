import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import BackButton from '@/components/BackButton'; // Adjust the path as necessary
import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';
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
  const isLandscape = useOrientation(); // use the hook

  const router = useRouter();
  const { building: buildingId } = router.query;
  const buildings = useSelector(state => state.building.buildings);
  const currentBuilding = buildings.find(b => b.id.toString() === buildingId);

  if (!currentBuilding) {
    return <p>Building not found</p>;
  }

  const floors = buttonPositions[`building${buildingId}`] || {};
  const handleFloorClick = (floorName) => {
    router.push(`/floors/building${buildingId}-${floorName}`);
  };

  // const { isLoading } = useImagePreloader([currentBuilding?.imagePath].filter(Boolean));

  // if (isLoading) {
  //   return <ThreeDotsWave/>; // Use your LoadingScreen component here
  // }
  if (!isLandscape) {
    return <RotateMessage />;
  }


  return (
    <>
    <div className="bg-white h-screen relative">
   
      <div 
        className="absolute w-full h-full bg-no-repeat bg-center z-10" 
        style={{ 
          backgroundImage: `url(${currentBuilding.imagePath})`, 
          backgroundSize: 'contain' 
        }}
      >
           <BackButton />
        {/* Render buttons for each floor based on their positions */}
        {Object.entries(floors).map(([floorName, position]) => (
          <button
            key={floorName}
            className="absolute bg-blue-500 text-white rounded p-2 sm:p-1 sm:text-sm"
            style={{ top: position.top, left: position.left }}
            
            onClick={() => handleFloorClick(floorName)}
          >
            {floorName}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default Building;