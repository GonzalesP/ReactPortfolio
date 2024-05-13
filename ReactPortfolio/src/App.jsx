import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import SkillsScreen from './components/SkillsScreen';
import EducationScreen from './components/EducationScreen';
import ProjectsScreen from './components/ProjectsScreen';
import ContactScreen from './components/ContactScreen';

function App() {
  const [view, setView] = useState("Home")

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

  return (
    <>
      <NavBar view={view} setView={setView}/>
      { screen }
    </>
  )
}

export default App;
