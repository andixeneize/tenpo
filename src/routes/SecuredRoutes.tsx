// src/routes/SecuredRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RouteProtection from './RouteProtection';
import HomePage from '@/pages/Secured/HomePage/HomePage';

const SecuredRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<RouteProtection />}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<Navigate to='' replace />} />
      </Route>
    </Routes>
  );
};

export default SecuredRoutes;
