import { useRouter } from 'next/router';

const HomeButton = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/'); // Navigates to the home page
  };

  return (
    <button onClick={goToHome} className="p-2 bg-blue-500 text-white rounded">
      Kthehu në fillim
    </button>
  );
};

export default HomeButton;
