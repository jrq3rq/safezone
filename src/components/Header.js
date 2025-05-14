import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FaOm } from 'react-icons/fa'; // Import the Om icon


const Header = () => {
  return (
    <header className="App-header">
      <h1 className="header-title">
      <Link to="/" className="header-title-link" aria-label="MantraMind Home">
        <FaOm className="header-icon" />MantraMinds
      </Link>
      </h1>
      <nav className="header-nav" aria-label="Main navigation">
        {/* <Link to="/" className="header-link">Home</Link> */}
        {/* <Link to="/mantras" className="header-link">Mantras</Link> */}
        {/* <Link to="/about" className="header-link">About</Link> */}
        <Link to="/solfeggio-studio" className="header-link">Studio</Link>
        <Link to="/frequencies" className="header-link">Frequencies</Link>
      </nav>
    </header>
  );
};

export default Header;