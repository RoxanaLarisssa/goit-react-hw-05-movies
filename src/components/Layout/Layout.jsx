import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.containerLayout}>
      <header className={styles.layoutHeader}>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};