import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <button><NavLink to="/categories">CONNECT</NavLink></button>
    </div>
  );
};

export default NavBar;


//how to get categorisContainer to display... want a button not navlink 