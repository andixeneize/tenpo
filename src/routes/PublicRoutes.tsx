// src/routes/PublicRoutes.tsx
import LoginPage from '@/pages/Public/LoginPage/LoginPage';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='*' element={<Navigate to='' replace />} />
    </Routes>
  );
};

export default PublicRoutes;
