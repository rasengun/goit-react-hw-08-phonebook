import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import s from './layout.module.css';

export const Layout = () => {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
