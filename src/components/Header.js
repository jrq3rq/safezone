import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FaOm } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pageOrder = [
    { path: '/', name: 'Home' },
    { path: '/solfeggio-studio', name: 'Solfeggio' },
    { path: '/frequencies', name: 'Frequencies' },
    { path: '/chakra-chants', name: 'Chakras' },
  ];

  const getHeaderClass = () => {
    switch (location.pathname) {
      case '/solfeggio-studio':
        return 'App-header-solfeggio';
      case '/frequencies':
        return 'App-header-frequencies';
      case '/chakra-chants':
        return 'App-header-chakras';
      default:
        return '';
    }
  };

  const handleNavigation = (targetPath) => {
    const currentIndex = pageOrder.findIndex(page => page.path === location.pathname);
    const targetIndex = pageOrder.findIndex(page => page.path === targetPath);

    if (currentIndex === targetIndex) return;

    const direction = targetIndex > currentIndex ? 'right' : 'left';
    navigate(targetPath, { state: { direction } });
  };

  return (
    <header className={`App-header ${getHeaderClass()}`}>
      <h1 className="header-title">
        <NavLink to="/" className="header-title-link" aria-label="MantraMind Home" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
          <FaOm className="header-icon" />
        </NavLink>
      </h1>
      <nav className="header-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
          onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}
        >
          Home
        </NavLink>
        <NavLink
          to="/solfeggio-studio"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
          onClick={(e) => { e.preventDefault(); handleNavigation('/solfeggio-studio'); }}
        >
          Solfeggio
        </NavLink>
        <NavLink
          to="/frequencies"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
          onClick={(e) => { e.preventDefault(); handleNavigation('/frequencies'); }}
        >
          Frequencies
        </NavLink>
        <NavLink
          to="/chakra-chants"
          className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
          onClick={(e) => { e.preventDefault(); handleNavigation('/chakra-chants'); }}
        >
          Chakras
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;