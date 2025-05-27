import { useAuth } from '@/contexts/useAuth';
import { PATH_NAMES } from '@/utils/constants';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface RouteProtectionProps {
  children?: React.ReactNode;
}

const RouteProtection: React.FC<RouteProtectionProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={PATH_NAMES.PUBLIC.LOGIN} replace />;
  }

  // `children` se usa si este componente envuelve JSX directo.
  return children ? <>{children}</> : <Outlet />;
};

export default RouteProtection;
