import React from 'react';
import './navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">PORTFOLIO</h1>
      </div>
      <div className="navbar-center">
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="navbar-right">
        <a href="https://github.com/officialmanish03" target="_blank" rel="noopener noreferrer">
          <div className="icon github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/manish-singh-916a9b276/" target="_blank" rel="noopener noreferrer">
          <div className="icon linkedin-icon" />
        </a>
        <a href="/resume.pdf" download="resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
        <i class='bx bxs-file-doc'></i>
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
