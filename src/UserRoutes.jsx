import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from 'modules/Phonebook/Layout/Layout';

import { PrivateRoute } from 'modules/Phonebook/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'modules/Phonebook/PublicRoute/PublicRoute';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
