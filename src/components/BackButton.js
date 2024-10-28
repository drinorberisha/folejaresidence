// components/BackButton.js
import React from 'react';
import { useRouter } from 'next/router';

const BackButton = React.memo(() => {
  const router = useRouter();

  const handleBack = React.useCallback(() => {
    router.back();
  }, [router]);

  return (
    <button
      onClick={handleBack}
      className="absolute p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
      aria-label="Back"
    >
      Kthehu prapa
    </button>
  );
});

export default BackButton;
