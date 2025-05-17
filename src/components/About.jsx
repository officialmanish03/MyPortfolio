// ✅ Step 1: React + AOS import
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';
import profileImg from '../assets/profile.png'; // Replace with your profile image
import { FaAward, FaCheckCircle, FaMedal } from 'react-icons/fa';

const About = () => {

  // ✅ Step 2: AOS initialization (inside useEffect)
  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation speed in ms
      once: false     // Animate every time on scroll
    });
  }, []);

  return (
    // ✅ Step 3: Add id="about" so navbar can scroll here
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* ✅ Step 4: Add data-aos for animation */}
        <div className="left-column" data-aos="fade-right">
          <img src={profileImg} alt="Profile" className="profile-pic" />
          
          <div className="section-box">
            <h2>Education</h2>
            <ul className="edu-list">
              <li>
                <strong>B.Tech ECE</strong> – MSIT<br />
                CGPA: 8.3 (2023–2027/Present)
              </li>
              <li>
                <strong>Class XII – CBSE (2022)</strong><br />
                Percentage: 71%
              </li>
              <li>
                <strong>Class X – CBSE (2020)</strong><br />
                Percentage: 71%
              </li>
            </ul>
          </div>
        </div>

        <div className="right-column" data-aos="fade-left">
          <div className="section-box">
            <h2>About Me</h2>
            <p>
            I'm a passionate Frontend Developer with a strong interest in UI/UX design, web technologies, and building creative digital experiences. I enjoy turning ideas into responsive and engaging web interfaces.
            </p>
          </div>

          <div className="section-box">
            <h2>Achievements</h2>
            <ul className="achievement-list">
              <li>
                <FaMedal className="icon" /> 1st Position – CodeQuest 71.0 (Let'sUpgrade)
                <ul>
                  <li>Won ₹2500 Amazon Voucher</li>
                  <li>Internship Opportunity at KrazyMantra</li>
                </ul>
              </li>
              <li>
                <FaAward className="icon" /> Silver – Let'sUpgrade Ambassador
                <ul>
                  <li>Brand promotion & student engagement</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="section-box">
            <h2>Certifications</h2>
            <ul className="certification-list">
              <li>
                <FaCheckCircle className="icon" /> HackMAIT 6.0 (Impulse 2025)
                <ul>
                  <li>Top 60 teams out of 300+</li>
                </ul>
              </li>
              <li>
                <FaCheckCircle className="icon" /> NDLI Club MSIT (2023–24)
                <ul>
                  <li>Social Media Dept. Member</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
