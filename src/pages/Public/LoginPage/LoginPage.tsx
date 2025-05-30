import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const fakeApiLogin = (
  email: string,
  password: string
): Promise<{ token: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ token: 'token-fake-123456' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000); // simula 1s de latencia
  });
};

const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated && location.pathname === '/login') {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fakeApiLogin(email, password);
      localStorage.setItem('authToken', response.token);
      login(response.token);
    } catch (err) {
      console.log('Error: ', err);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row font-sans'>
      {/* Left side (desktop) / Top (mobile) */}
      <div
        className='w-full md:w-1/2 h-[50vh] md:h-auto bg-cover bg-center'
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }images/login-bg.jpg')`,
        }}
      />

      {/* Right side (desktop) / Bottom (mobile) */}
      <div className='w-full md:w-1/2 h-[50vh] md:h-auto flex items-center justify-center bg-white'>
        <div className='p-8 text-center w-full max-w-md'>
          {/* Logo (desktop) */}
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt='Logo'
            className='hidden md:block mx-auto mb-6 w-24 h-24'
          />

          <h1 className='text-3xl font-bold text-gray-800 mb-4'>Login</h1>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='p-2 border rounded'
              disabled={loading}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='p-2 border rounded'
              disabled={loading}
            />
            <button
              type='submit'
              disabled={loading}
              className='px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition'
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>

          {error && (
            <p className='mt-4 text-red-600 font-semibold' role='alert'>
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
