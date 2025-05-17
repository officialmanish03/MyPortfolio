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
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <div className="icon github-icon" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
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
