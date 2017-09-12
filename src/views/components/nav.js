import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar" >
    <div className="navbar-brand">
      <Link to={'/'} className="navbar-item" >Project Level Up</Link>
    </div>
    <div className="navbar-start">
      <Link to={'/dashboard'} className="navbar-item">Dashboard</Link>
      <Link to={'/'} className="navbar-item">Calendar</Link>
    </div>
  </nav>
);

export default Nav;
