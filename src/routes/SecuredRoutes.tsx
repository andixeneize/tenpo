// src/routes/SecuredRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RouteProtection from './RouteProtection';
import HomePage from '@/pages/Secured/HomePage/HomePage';

const SecuredRoutes: React.FC = () => {
  return (
    <Routes>
      {/*
        This is a layout route. Any route defined INSIDE this <Route>
        will be rendered by the <Outlet /> in RouteProtection, and thus
        will automatically be protected by RouteProtection's logic.
      */}
      <Route element={<RouteProtection />}>
        {/*
          Use the 'index' prop here. When AppRouter matches /home/* and renders SecuredRoutes,
          this `index` route will match the exact path `/home`.
        */}
        <Route index element={<HomePage />} />
        {/* OR <Route path="" element={<HomePage />} /> */}
        {/* OR <Route path="." element={<HomePage />} /> */}

        {/*
          Catch-all for any other secured route that isn't explicitly defined.
          It will redirect to the home page (within the secured context).
          `Maps to=""` redirects to the index route of the current <Routes> context.
        */}
        <Route path='*' element={<Navigate to='' replace />} />
      </Route>
    </Routes>
  );
};

export default SecuredRoutes;
