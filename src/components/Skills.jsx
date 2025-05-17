import React, { useEffect } from 'react';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma, FaCogs } from 'react-icons/fa';
import { SiFirebase, SiCanva } from 'react-icons/si';
import { FaCode } from 'react-icons/fa'; // ✅ Use FaCode for VS Code

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid">
        {/* First Row: Programming Languages */}
        <div className="skills-row">
          <div className="skill-box" data-aos="fade-up">
            <h3>🚀 Programming Languages</h3>
            <div className="skill-bar"><FaJs className="skill-icon" /> JavaScript <span>75%</span><div className="bar bar-75"></div></div>
            <div className="skill-bar"><FaCogs className="skill-icon" /> C++ <span>70%</span><div className="bar bar-70"></div></div>
            <div className="skill-bar"><FaCogs className="skill-icon" /> C <span>70%</span><div className="bar bar-70"></div></div>
          </div>

          {/* Second Row: Frameworks & Libraries */}
          <div className="skill-box" data-aos="fade-up">
            <h3>⚙️ Frameworks & Libraries</h3>
            <div className="skill-bar"><FaHtml5 className="skill-icon" /> HTML <span>95%</span><div className="bar bar-95"></div></div>
            <div className="skill-bar"><FaCss3Alt className="skill-icon" /> CSS <span>90%</span><div className="bar bar-90"></div></div>
            <div className="skill-bar"><FaReact className="skill-icon" /> React.js <span>70%</span><div className="bar bar-70"></div></div>
            <div className="skill-bar"><SiFirebase className="skill-icon" /> Firebase <span>65%</span><div className="bar bar-65"></div></div>
          </div>
        </div>

        {/* Third Row: Developer Tools */}
        <div className="skills-row">
          <div className="skill-box" data-aos="fade-up">
            <h3>🛠️ Developer Tools</h3>
            <div className="skill-bar"><FaGitAlt className="skill-icon" /> Git <span>80%</span><div className="bar bar-80"></div></div>
            <div className="skill-bar"><FaGithub className="skill-icon" /> GitHub <span>80%</span><div className="bar bar-80"></div></div>
            <div className="skill-bar"><FaCode className="skill-icon" /> VS Code <span>90%</span><div className="bar bar-90"></div></div>
          </div>

          {/* Fourth Row: Soft Skills */}
          <div className="skill-box" data-aos="fade-up">
            <h3>🤝 Soft Skills</h3>
            <div className="soft-skill"><SiCanva className="skill-icon" /> Canva</div>
            <div className="soft-skill"><FaFigma className="skill-icon" /> Figma</div>
            <div className="soft-skill">🧠 Problem Solving</div>
            <div className="soft-skill">👥 Team Building</div>
            <div className="soft-skill">📊 Analytical Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
