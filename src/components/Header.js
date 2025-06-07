import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const pageOrder = [
    { path: '/', name: 'Home' },
    { path: '/vulnerability', name: 'Vulnerability' },
    { path: '/evacuation', name: 'Evacuation' },
    { path: '/alerts', name: 'Alerts' },
  ];

  const getHeaderClass = () => {
    switch (location.pathname) {
      case '/vulnerability':
        return 'App-header-vulnerability';
      case '/evacuation':
        return 'App-header-evacuation';
      case '/alerts':
        return 'App-header-alerts';
      default:
        return '';
    }
  };

  const handleNavigation = (targetPath) => {
    const currentIndex = pageOrder.findIndex((page) => page.path === location.pathname);
    const targetIndex = pageOrder.findIndex((page) => page.path === targetPath);

    if (currentIndex === targetIndex) return;

    const direction = targetIndex > currentIndex ? 'right' : 'left';
    navigate(targetPath, { state: { direction } });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen && menuRef.current) {
      setTimeout(() => menuRef.current.querySelector('a')?.focus(), 100);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        toggleButtonRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current.focus();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`App-header ${getHeaderClass()}`}>
      <h1 className="header-title">
        <NavLink
          to="/"
          className="header-title-link"
          aria-label="SafeZone Response Home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }}
        >
          <FaShieldAlt className="header-icon" />
          SafeZone
        </NavLink>
      </h1>
      {!isMobileMenuOpen && (
        <button
          ref={toggleButtonRef}
          className="header-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="header-nav"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      )}
      {isMobileMenuOpen && (
        <div
          className={`header-overlay ${isMobileMenuOpen ? 'header-overlay-active' : ''}`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      {(!isMobileView || (isMobileView && isMobileMenuOpen)) && (
        <nav
          id="header-nav"
          ref={menuRef}
          className={`header-nav ${isMobileMenuOpen ? 'header-nav-open' : ''}`}
          aria-hidden={isMobileView && !isMobileMenuOpen}
        >
          {isMobileMenuOpen && (
            <button
              className="header-toggle header-toggle-close"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="header-nav"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          )}
          {pageOrder.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) => `header-link ${isActive ? 'header-link-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(page.path);
              }}
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              {page.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;