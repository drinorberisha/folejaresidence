import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import BackButton from '@/components/BackButton'; // Adjust the path as necessary

const buttonPositions = {
  'building1': {
      'Baza e perdheses': { top: '67%', left: '48%' },
      'Kati karakteristik': { top: '55%', left: '48%' }
  
  },
  'building2': {
      'Baza e perdheses': { top: '73%', left: '49%' },
      'Kati karakteristik': { top: '55%', left: '49%' }
  },
  'building3': {
      'Baza e perdheses': { top: '73%', left: '49%' },
      'Baza e katit 1': { top: '67%', left: '49%' },
      'Kati karakteristik': { top: '58%', left: '49%' }
  },
  'building4': {
      'Baza e perdheses': { top: '73%', left: '49%' },
      'Baza e katit 1': { top: '64%', left: '49%' },
      'Kati karakteristik': { top: '56%', left: '49%' }
  },
  'building5': {
      'Baza e perdheses': { top: '73%', left: '49%' },
      'Kati karakteristik': { top: '55%', left: '49%' }
  },
  'building6': {
      'Baza e perdheses': { top: '73%', left: '49%' },
      'Baza e katit 1': { top: '64%', left: '49%' },
      'Kati karakteristik': { top: '56%', left: '49%' }
  },
  'building7': {
      'Baza e perdheses': { top: '73%', left: '49%' },
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

  return (
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
  );
};

export default Building;