// src/pages/Public/LoginPage/LoginPage.tsx
import useAuth from '@/hooks/useAuth';
import { PATH_NAMES } from '@/utils/constants';
import React, { useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Use useEffect for redirection logic based on authentication status
  useEffect(() => {
    if (isAuthenticated) {
      // console.log('LoginPage: User is authenticated, redirecting to HOME.'); // Optional: keep for initial debugging
      navigate(PATH_NAMES.SECURED.HOME, { replace: true });
    }
    // Add isAuthenticated and navigate to the dependency array.
    // React Hook useEffect has a missing dependency: 'navigate'. Either include it or remove the dependency array.
    // React Hook useEffect has a missing dependency: 'isAuthenticated'. Either include it or remove the dependency array.
  }, [isAuthenticated, navigate]); // Dependencies: Re-run effect if isAuthenticated or navigate changes

  // Handle the simulated login button click
  const handleLogin = () => {
    login(); // Call the login function from our useAuth hook
    // console.log('LoginPage: Simulating login, redirecting to HOME.'); // Optional: keep for initial debugging
    // The navigate after login click is fine here, as it's in an event handler.
    navigate(PATH_NAMES.SECURED.HOME, { replace: true });
  };

  // If the user is authenticated, we return null immediately.
  // The useEffect above will handle the navigation.
  if (isAuthenticated) {
    return null;
  }

  return (
    <div
      className='
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        p-4
        bg-gray-100
        font-sans
      '
    >
      <div
        className='
          bg-white
          p-8
          rounded-lg
          shadow-md
          text-center
          max-w-md
          w-full
        '
      >
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          Welcome to the Login Page
        </h1>
        <p className='text-gray-600 mb-6'>This page is publicly accessible.</p>
        <button
          onClick={handleLogin}
          className='
            px-4 py-2
            text-base
            bg-blue-500
            text-white
            rounded-md
            hover:bg-blue-600
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-opacity-50
            transition-colors
            duration-200
            ease-in-out
          '
        >
          Log In (Simulated)
        </button>
        <p className='text-sm text-gray-500 mt-4'>
          Click the button to simulate a successful login and proceed to the
          secured home page.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
