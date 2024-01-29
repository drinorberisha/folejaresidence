import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigates back in the history
  };

  return (
    <button onClick={goBack} className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
      Kthehu prapa
    </button>
  );
};

export default BackButton;
