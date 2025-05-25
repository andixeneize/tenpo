import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '@/features/auth/pages/LoginPage';
import HomePage from '@/features/home/pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
