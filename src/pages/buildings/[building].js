import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import BackButton from '@/components/BackButton'; // Adjust the path as necessary
import RotateMessage from '@/components/RotateMessage';
import useOrientation from '@/hooks/useOrientation';

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
      'Afarizem SU': { top: '75%', left: '49%' },
      'Afarizem P': { top: '68%', left: '49%' },
      'Baza e katit 1': { top: '61%', left: '49%' },
      'Kati karakteristik': { top: '54%', left: '49%' }
  },
  'building4': {
      'Afarizem SU': { top: '75%', left: '49%' },
      'Afarizem P': { top: '68%', left: '49%' },
      'Baza e katit 1': { top: '61%', left: '49%' },
      'Kati karakteristik': { top: '54%', left: '49%' }
  },
  'building5': {
      'Afarizem P': { top: '73%', left: '49%' },
      'Kati karakteristik': { top: '55%', left: '49%' }
  },
  'building6': {
      'Afarizem P': { top: '73%', left: '49%' },
      'Baza e katit 1': { top: '64%', left: '49%' },
      'Kati karakteristik': { top: '56%', left: '49%' }
  },
  'building7': {
      'Afarizem P': { top: '73%', left: '49%' },
      'Baza e katit 1': { top: '64%', left: '49%' },
      'Kati karakteristik': { top: '56%', left: '49%' }
  },

};

const Building = () => {
  const router = useRouter();
  const { building: buildingId } = router.query;
  const buildings = useSelector(state => state.building.buildings);
  const currentBuilding = buildings.find(b => b.id.toString() === buildingId);

  if (!currentBuilding) {
    return <p>Building not found</p>;
  }

  const floors = buttonPositions[`building${buildingId}`] || {};
  const isLandscape = useOrientation(); // use the hook


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
            
            onClick={() => router.push(`/floors/${floorName}`)}
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