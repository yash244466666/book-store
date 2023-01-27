import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Books</Link></li>
        <li className="nav-item"><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </>
);

export default Navbar;
