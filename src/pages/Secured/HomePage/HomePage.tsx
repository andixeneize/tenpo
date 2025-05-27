// src/pages/Secured/HomePage/HomePage.tsx
import { useAuth } from '@/contexts/useAuth';
import { PATH_NAMES } from '@/utils/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Handle the logout button click
  const handleLogout = () => {
    logout();
    navigate(PATH_NAMES.PUBLIC.LOGIN, { replace: true });
  };

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
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Welcome Home!</h1>
        <p className='text-gray-600 mb-6'>
          You have successfully accessed a secured page.
        </p>
        <button
          onClick={handleLogout}
          className='
            px-4 py-2
            text-base
            bg-red-600
            text-white
            rounded-md
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-red-500
            focus:ring-opacity-50
            transition-colors
            duration-200
            ease-in-out
          '
        >
          Log Out
        </button>
        <p className='text-sm text-gray-500 mt-4'>
          This page is protected and can only be viewed by authenticated users.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
