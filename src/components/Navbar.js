import React, { useEffect,useState } from 'react';
import {  Link,NavLink } from "react-router-dom";
import "../scss/Navbar.scss"
import logo from '../images/logo.png'
const Navbar = () => {
    
    return (
        <>
        <Link to="/about" className="logo"><h3 className="logo-text">CS</h3></Link>
        <nav className="nav-bar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <div className="burger">
            <button id="burger-btn" className="btn">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </button>
        </div>
        </nav>
        </>
    );
};

export default Navbar;