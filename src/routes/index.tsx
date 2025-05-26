// src/routes/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import SecuredRoutes from './SecuredRoutes';
import useAuth from '../hooks/useAuth';
import { PATH_NAMES } from '../utils/constants';

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth(); // This hook determines the initial redirect

  console.log('index: ', isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATH_NAMES.ROOT} // This is '/'
          element={
            isAuthenticated ? (
              <Navigate to={PATH_NAMES.SECURED.HOME} replace />
            ) : (
              <Navigate to={PATH_NAMES.PUBLIC.LOGIN} replace />
            )
          }
        />

        <Route
          path={`${PATH_NAMES.PUBLIC.LOGIN}/*`}
          element={<PublicRoutes />}
        />
        <Route
          path={`${PATH_NAMES.SECURED.HOME}/*`}
          element={<SecuredRoutes />}
        />

        <Route // Catch-all for *any* other path
          path='*'
          element={
            isAuthenticated ? (
              <Navigate to={PATH_NAMES.SECURED.HOME} replace />
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
