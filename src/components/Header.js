import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import { FaOm } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const getHeaderClass = () => {
    switch (location.pathname) {
      case '/solfeggio-studio':
        return 'App-header-solfeggio';
      case '/frequencies':
        return 'App-header-frequencies';
      case '/chakra-chants':
        return 'App-header-chakras';
      default:
        return ''; // Default header for Home and other routes
    }
  };

  return (
    <header className={`App-header ${getHeaderClass()}`}>
      <h1 className="header-title">
        <NavLink to="/" className="header-title-link" aria-label="MantraMind Home">
          <FaOm className="header-icon" />
        </NavLink>
      </h1>
      <nav className="header-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/solfeggio-studio"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
        >
          Solfeggio
        </NavLink>
        <NavLink
          to="/frequencies"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
        >
          Frequencies
        </NavLink>
        <NavLink
          to="/chakra-chants"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
        >
          Chakras
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;