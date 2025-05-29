import { useAuth } from '@/contexts/useAuth';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface SecuredLayoutProps {
  children: ReactNode;
}

const SecuredLayout: React.FC<SecuredLayoutProps> = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      {/* Header */}
      <header className='fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-between items-center z-10'>
        <h1 className='text-xl font-semibold text-gray-800'>Tenpo Challenge</h1>
        <button
          onClick={handleLogout}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'
        >
          Logout
        </button>
      </header>

      {/* Contenido principal */}
      <main className='flex-1 pt-16 p-6 overflow-auto'>{children}</main>
    </div>
  );
};

export default SecuredLayout;
