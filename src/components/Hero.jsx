import React from 'react';
import './hero.css';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../assets/profile.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-section">
        <h1>I AM A <span className="typed-text">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'UI/UX Designer',
              2000,
              'Frontend Developer',
              2000, 
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span></h1>
        <h2>About Me</h2>
        <p>I'm Manish Singh, a frontend developer skilled in HTML, CSS, JavaScript, and React.js. I enjoy building responsive, user-friendly web interfaces and constantly improving my skills through real-world projects.</p>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
          <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        </div>    
      </div>

      <div className="image-section">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h3>Manish Singh</h3>
      </div>
    </div>
  );
};

export default Hero;
