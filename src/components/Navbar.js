import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary p-3 h5">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item me-4 mt-1">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item me-4 mt-1">
            <Link to="/gems">Gems</Link>
          </li>
          <li className="nav-item me-4 mt-1">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-item me-4 mt-1">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item me-4 mt-1">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
