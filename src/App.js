import './App.css';
import Contact from './views/Contact/ContactPage';
import Home from './views/Home/HomePage';
import Project from './views/Projects/ProjectsPage';
import Skills from './views/Skills/SkillsPage';

function App() {
  return (
    <div>
      <Home />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
