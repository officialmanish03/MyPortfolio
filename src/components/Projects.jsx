import React, { useEffect } from 'react';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import swiggyImg from '../assets/projects/swiggy.png';
import NetflixImg from '../assets/projects/Netflix.png'
import PortfolioImg from '../assets/projects/Portfolio.png'


const projects = [
  {
    title: 'Netflix Clone',
    description: 'React-based Netflix UI with TMDB API.',
    image: NetflixImg,
    liveLink: 'https://netflix-demo.vercel.app',
    codeLink: 'https://github.com/username/netflix-clone'
  },
  {
    title: 'Swiggy UI Clone',
    description: 'Frontend clone of Swiggy using HTML/CSS/JS.',
    image: swiggyImg,
    liveLink: 'https://swiggy-clone.netlify.app',
    codeLink: 'https://github.com/username/swiggy-clone'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio with React and AOS.',
    image: PortfolioImg,
    liveLink: 'https://manish-portfolio.vercel.app',
    codeLink: 'https://github.com/username/portfolio'
  },
  {
    title: 'Project Placeholder',
    description: 'Coming soon...',
    
    liveLink: '#',
    codeLink: '#'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-card" data-aos="zoom-in-up" key={index}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-buttons">
                <a href={proj.liveLink} target="_blank" rel="noreferrer">🔗 Live</a>
                <a href={proj.codeLink} target="_blank" rel="noreferrer">💻 Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
