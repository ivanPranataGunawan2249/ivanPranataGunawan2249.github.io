import React from 'react'
import './App.css';
import NavbarComp from './components/NavbarComp';
import Home from './components/Home'
import About from './components/About';
import Skill from './components/Skill';
import Portofolio from './components/Portofolio';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavbarComp />
      <Home />
      <About />
      <Skill />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
