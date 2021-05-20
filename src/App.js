import React,{useState} from "react";
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggler"
function App() {
  // const [theme, setTheme] = useState('light');
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
    const [theme, themeToggler,mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
console.log(theme)

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div className="App">
      <Router>
      <div className={theme === "light" ? "navigation-bar" : "navigation-bar-dark"}>
      <Navbar />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      </div>
      <About />
      <Skills />
      <Projects />
      <Footer />
      </Router>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
