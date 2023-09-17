import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbar = () => {
  return (
    <div className="Navbar">
        <ArrowBackIcon className='NavbarIcon' onClick={() => window.history.back()} />
        <NavLink to="/home" style={{ textDecoration: 'none' }}><HomeIcon className='NavbarIcon' /></NavLink>
        <NavLink to="/" style={{ textDecoration: 'none' }}><LogoutIcon className='NavbarIcon' /></NavLink>
    </div>
  );
};

export default Navbar;
