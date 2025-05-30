import { useAuth } from '@/contexts/useAuth';
import { LogOut } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className='min-h-screen flex flex-col bg-white'>
      {/* Header */}
      <header className='fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-between items-center z-10'>
        {/* Logo + Título */}
        <Link to='/' className='flex items-center gap-2'>
          <img
            src='/images/logo.png'
            alt='Logo'
            className='w-8 h-8 object-contain'
          />
          <h1 className='text-xl font-semibold text-gray-800'>
            Tenpo Challenge
          </h1>
        </Link>

        {/* Logout icon button with tooltip */}
        <div className='relative group'>
          <button
            onClick={handleLogout}
            className='p-2  text-red-500 rounded-full hover:text-red-600 transition'
            aria-label='Logout'
          >
            <LogOut className='w-5 h-5' />
          </button>

          {/* Tooltip */}
          <span className='absolute top-full right-1/2 translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap hidden md:block'>
            Cerrar sesión
          </span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className='flex-1 pt-16 p-6 overflow-auto'>{children}</main>
    </div>
  );
};

export default SecuredLayout;
