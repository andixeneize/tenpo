// src/routes/PublicRoutes.tsx
import LoginPage from '@/pages/Public/LoginPage/LoginPage';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      {/*
        This `index` route matches the exact path of its parent (`/login`).
        So, when the URL is `/login`, LoginPage will render.
      */}
      <Route index element={<LoginPage />} />

      {/*
        This catch-all will redirect any unknown sub-paths within the /login segment
        (e.g., /login/something-else) back to the base /login.
        `Maps to=""` means navigate to the index route of the current <Routes> context.
        You can also use `<Navigate to={PATH_NAMES.PUBLIC.LOGIN} replace />`
        if you prefer absolute paths, but relative `to=""` is cleaner here.
      */}
      <Route path='*' element={<Navigate to='' replace />} />
    </Routes>
  );
};

export default PublicRoutes;
