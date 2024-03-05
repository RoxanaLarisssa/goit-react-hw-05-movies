import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className=" w-25 p-3" style={{ marginLeft: ' 10px' }}>
        <div className="p-3 mb-2 bg-light-subtle text-emphasis-light">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold text-body-secondary" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link fw-bold text-body-secondary"
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
