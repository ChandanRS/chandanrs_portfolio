import React from "react";
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      </Router>
    </div>
  );
}

export default App;
