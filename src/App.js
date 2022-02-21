import { Fragment } from 'react';
import './App.css';
import Contact from './views/Contact/ContactPage';
import Home from './views/Home/HomePage';
import Footer from './views/Layout/Footer/Footer';
import Project from './views/Projects/ProjectsPage';
import Skills from './views/Skills/SkillsPage';

function App() {
  return (
    <Fragment>
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
