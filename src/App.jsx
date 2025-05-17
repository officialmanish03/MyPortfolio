
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import '../src/app.css'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const App = () => {
  return(
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
