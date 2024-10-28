// BuildingButton.js
import React from 'react';
import Link from 'next/link';

const BuildingButton = React.memo(({ buildingId, label }) => {
  return (
    <Link 
    href={`/buildings/${buildingId}`}
    className={`building-${buildingId} p-2 sm:p-1 text-base sm:text-sm bg-blue-500 hover:bg-blue-700 rounded transition-all duration-300 inline-block text-center`}

    >
        {label}    
    </Link>
  );
});

export default BuildingButton;