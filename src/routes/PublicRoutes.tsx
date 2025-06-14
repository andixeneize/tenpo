import ChangePasswordPage from '@/pages/Public/ChangePasswordPage/ChangePasswordPage';
import LoginPage from '@/pages/Public/LoginPage/LoginPage';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='change-password' element={<ChangePasswordPage />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
};

export default PublicRoutes;
