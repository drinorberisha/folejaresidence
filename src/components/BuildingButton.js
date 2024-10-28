import React from 'react';

const BuildingButton = React.memo(({ buildingId, label, onClick }) => {
  return (
    <button
      className={`building-${buildingId} p-2 sm:p-1 text-base sm:text-sm bg-blue-500 hover:bg-blue-700 rounded transition-all duration-300`}
      onClick={() => onClick(buildingId)}
    >
      {label}
    </button>
  );
});

export default BuildingButton;
