import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">PORTFOLIO</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={toggleMenu}>ABOUT</a>
        <a href="#skills" onClick={toggleMenu}>SKILLS</a>
        <a href="#projects" onClick={toggleMenu}>PROJECTS</a>
        <a href="#contact" onClick={toggleMenu}>CONTACT</a>

        {/* Mobile-only resume button */}
        <a
          href="/resume.pdf"
          className="resume-button mobile-only"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxs-file-doc"></i> RESUME
        </a>
      </div>

      <div className="navbar-right">
        <a href="https://github.com/officialmanish03" target="_blank" rel="noopener noreferrer">
          <div className="icon github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/manish-singh-916a9b276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <div className="icon linkedin-icon" />
        </a>
        <a
          href="/resume.pdf"
          className="resume-button desktop-only"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxs-file-doc"></i> RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
