import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && location.pathname === '/login') {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  const handleLogin = () => {
    login(); // login actualiza el contexto, el efecto redirige
  };

  if (isAuthenticated) {
    return null; // No renderizamos login si ya está autenticado
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 font-sans'>
      <div className='bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          Welcome to the Login Page
        </h1>
        <p className='text-gray-600 mb-6'>This page is publicly accessible.</p>
        <button
          onClick={handleLogin}
          className='
            px-4 py-2 text-base bg-blue-500 text-white rounded-md
            hover:bg-blue-600 focus:outline-none focus:ring-2
            focus:ring-blue-500 focus:ring-opacity-50 transition-colors
            duration-200 ease-in-out
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
