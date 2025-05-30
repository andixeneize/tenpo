import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import SecuredRoutes from './SecuredRoutes';
import { PATH_NAMES } from '@/utils/constants';
import { useAuth } from '@/contexts/useAuth';

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`${PATH_NAMES.PUBLIC.LOGIN}/*`}
          element={<PublicRoutes />}
        />

        <Route
          path='/*'
          element={
            isAuthenticated ? (
              <SecuredRoutes />
            ) : (
              <Navigate to={PATH_NAMES.PUBLIC.LOGIN} replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
