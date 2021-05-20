import React, {  useEffect, useRef } from "react";

import dp from '../images/crs.jpg'
import styled, { keyframes } from 'styled-components';
import { bounce,slideInRight,slideInLeft,fadeIn,fadeInLeft } from 'react-animations';
import Slide from 'react-reveal/Slide';

import "../scss/About.scss"
import human from '../images/h1.png'
// import human2 from '../images/h2-removebg-preview.png'
import human2 from '../images/me.jpg'
import me from '../images/me.jpg'
import meDark from '../images/me_dark.jpg'
import mypic from '../images/mypic.jpg'
// import human2 from '../images/undraw_coding.png'
// import human2 from '../images/undraw_Web_developer_re_h7ie.png'

const bounceAnimation = keyframes`${bounce}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const Bounce = styled.div`
  animation: 2s ${bounceAnimation};
`;

const SlideRight = styled.div`
  animation: 2s ${slideInRightAnimation};
`;

const SlideLeft = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;
const FadeIn = styled.div`
  animation: 3s ${fadeInAnimation};
`;
 
const FadeInLeft = styled.div`
  animation: 1s ${fadeInLeftAnimation};
`;
 
    
const About = () => {
  const theme = localStorage.getItem("theme")
    return (
      <div className="about">
        <div id="about" className="banner">
        <FadeInLeft>{theme === "dark" ?  <img className="me" src={meDark} alt="dp" /> : <img className="me" src={me} alt="dp" /> }</FadeInLeft> 
            

            <div className="my-info">  
            {/* <Slide left><img className= "illustration" src={human2} alt="illustration" /></Slide> */}
            {/* <img className= "profile-pic" src={dp} alt="dp" /> */}
            <div className="info">
              <div className="Name">
                <Bounce className="banner-title"><span className="name-text">Chandan Shetti</span></Bounce>
                <SlideRight className={theme === "dark" ?  "banner-subtitle-dark" : "banner-subtitle" }>A JavaScript Enthusiast && Web Developer</SlideRight>
              </div>
                <div className="contact-container">
            <FadeIn  className="contact">
             <a href="https://github.com/ChandanRS" target="_blank" rel="noreferrer"><i className="fab sm fa-2x fa-github"></i></a>
            </FadeIn>
            <FadeIn  className="contact">
                <a href="https://www.linkedin.com/in/chandan-shetti-1758ba131" target="_blank" rel="noreferrer"><i className="fab  sm fa-2x  fa-linkedin"></i></a>
            </FadeIn>
            <FadeIn  className="contact">
                <a href="https://twitter.com/chandan_shetti" target="_blank" rel="noreferrer"><i className="fab sm fa-2x fa-twitter"></i></a>
            </FadeIn>
            <FadeIn  className="contact">
                <a href="https://www.facebook.com/chandan.shetti" target="_blank"  rel="noreferrer"><i className="fab  sm fa-2x fa-facebook"></i></a>
            </FadeIn>
            <FadeIn  className="contact">
                <a href="https://www.instagram.com/chandanrs06/" target="_blank"  rel="noreferrer"><i className="fab  sm fa-2x fa-instagram"></i></a>
            </FadeIn>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default About;