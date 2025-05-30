import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RouteProtection from './RouteProtection';
import UserDataPage from '@/pages/Secured/UserDataPage/UserDataPage';
import SecuredLayout from '@/layouts/SecuredLayout';
import HomePage from '@/pages/Secured/HomePage/HomePage';

const SecuredRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<RouteProtection />}>
        <Route
          index
          element={
            <SecuredLayout>
              <HomePage />
            </SecuredLayout>
          }
        />
        <Route
          path='user-data'
          element={
            <SecuredLayout>
              <UserDataPage />
            </SecuredLayout>
          }
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
};

export default SecuredRoutes;
