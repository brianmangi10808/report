
import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom'; // Import NavLink for active styling

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="report">
        <h1>Report</h1>
        <div className="left-nav">
          <NavLink to="/Home" activeClassName="active"  >Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
