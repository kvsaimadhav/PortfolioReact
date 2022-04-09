import React from 'react';
import About from './components/About';
import Research from './components/Research';
import Documents from './components/Documents';
import WorkExp from './components/WorkExp';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <a href="#home" class ="logo" target="_blank"> Portfolio</a>
      <div class="toggle" onclick = "toggleMenu();"></div>
      <ul class="menu">
        <li><a href="#home" onclick = "toggleMenu();" target="_blank">Home</a></li>
        <li><a href="#about" onclick = "toggleMenu();" target="_blank">About</a></li>
        <li><a href="#research" onclick = "toggleMenu();" target="_blank">Research</a></li>
        <li><a href="#documents" onclick = "toggleMenu();" target="_blank">Documents</a></li>
        <li><a href="#workexp" onclick = "toggleMenu();" target="_blank">Work Experience</a></li>
        <li><a href="#contact" onclick = "toggleMenu();" target="_blank">Contact</a></li>
      </ul>
    </header>
      <section class="banner" id = "home">
        <div class="textBx">
          <h2> Hello, I'm <span> Sai Madhav.</span></h2>
          <h3> I'm a Full Stack Developer.</h3>
          <a href="#about" class="btn" target="_blank">About Me</a>
        </div>
      </section>
      <About></About>
      <Research></Research>
      <Documents></Documents>
      <WorkExp></WorkExp>
      <Contact></Contact>
    </div>
  );
}

export default App;
