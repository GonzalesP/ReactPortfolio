import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar';
import HomeScreen from './components/Home/HomeScreen';
import AboutScreen from './components/AboutMe/AboutScreen';
import SkillsScreen from './components/Skills/SkillsScreen';
import EducationScreen from './components/Education/EducationScreen';
import ProjectsScreen from './components/Projects/ProjectsScreen';
import ContactScreen from './components/ContactMe/ContactScreen';

// this is the Root component
function App() {
  // this state keeps track of what screen the user wants to view
  // e.g. view == "Home" means that the Home Screen should be visible
  const [view, setView] = useState("Home")

  // use a conditional component to determine what screen to render in the JSX
  let screen;

  if (view == "Home") {
    screen = <HomeScreen />;
  }
  else if (view == "About") {
    screen = <AboutScreen />;
  }
  else if (view == "Skills") {
    screen = <SkillsScreen />;
  }
  else if (view == "Education") {
    screen = <EducationScreen />;
  }
  else if (view == "Projects") {
    screen = <ProjectsScreen />;
  }
  else if (view == "Contact") {
    screen = <ContactScreen />;
  }

  // the web page will consist of the Navigation Bar and Screen Content
  return (
    <>
      <NavBar view={view} setView={setView}/>
      { screen }
    </>
  )
}

export default App;
