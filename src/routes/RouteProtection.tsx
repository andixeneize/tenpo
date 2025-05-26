// src/routes/RouteProtection.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Adjust path
import { PATH_NAMES } from '../utils/constants'; // Adjust path

interface RouteProtectionProps {
  children?: React.ReactNode; // For when RouteProtection is used as a wrapper (e.g., <RouteProtection><MyComponent/></RouteProtection>)
}

const RouteProtection: React.FC<RouteProtectionProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If the user is NOT authenticated, redirect them to the login page.
  // `replace` ensures the current entry in the history stack is replaced.
  if (!isAuthenticated) {
    return <Navigate to={PATH_NAMES.PUBLIC.LOGIN} replace />;
  }

  // If the user IS authenticated, render the children.
  // `Outlet` is used when this component acts as a "layout route" for nested routes.
  // `children` is used if this component directly wraps content.
  return children ? <>{children}</> : <Outlet />;
};

export default RouteProtection;
