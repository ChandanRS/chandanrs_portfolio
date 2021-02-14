import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-bar">
        <div className="logo">CS</div>
        <ul id="#nav-items" className="nav-links">
            {/* <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li> */}
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/skills" >Skills</Link></li>
            <li><Link to="/projects" >Projects</Link></li>
        </ul>
        <div className="burger">
            <button id="burger-btn" className="btn">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </button>
    </div>
</nav>
    );
};

export default Navbar;