import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Header = () => (
  <div id="navbar">
    <div>
      <img id="logo" src={logo} alt="logo" />
    </div>
    <nav>
      <li><NavLink to="/" activeClassName="active">Rockets</NavLink></li>
      <li><NavLink to="/missions" activeClassName="active">Missions</NavLink></li>
      <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
    </nav>
  </div>
);

export default Header;
