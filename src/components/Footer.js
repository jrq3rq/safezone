import React from 'react';
import { Link } from 'react-router-dom';
import { FaOm } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FaOm className="footer-icon" aria-hidden="true" />
        {/* <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/frequencies" className="footer-link">Frequencies</Link>
          <Link to="/solfeggio-studio" className="footer-link">Studio</Link>
        </nav> */}
        {/* <p className="footer-copyright">&copy; 2025 </p> */}
      </div>
    </footer>
  );
};

export default Footer;