import React, { Fragment } from 'react';
import '../scss/Skills.scss'
import styled, { keyframes } from 'styled-components';
import { bounceInRight,bounceInLeft,jello } from 'react-animations';
import illustration from '../images/skills_illustration.png'

const bounceInRightAnim = keyframes`${bounceInRight}`;
const JelloAnim = keyframes`${jello}`;



const JelloDiv = styled.div`
  animation: 2s ${JelloAnim};
`;


const Skills = () => {
  const theme = localStorage.getItem("theme")

    return (
        <div className="Container">
        <div id="skills" className="My-Skills">What I've Learnt</div>
        <div className="skill-container">
        <h3>Front End</h3>
        <h3>UI Frameworks</h3>
        <h3>Back End</h3>
        <JelloDiv className={theme === "dark" ? " card-skills-dark fe" : "card-skills fe" }>
        <span><i class="devicon-html5-plain colored"></i><span>HTML</span></span>
        <span> <i class="devicon-css3-plain-wordmark colored"></i><span>CSS 3</span></span>
        <span><i class="devicon-javascript-plain colored"></i><span>JavaScript</span></span>
        <span><i class="devicon-react-original colored"></i><span>React</span></span>
        <span><i class="devicon-redux-original colored"></i><span>Redux</span></span>
        </JelloDiv>

        <JelloDiv className={theme === "dark" ? "card-skills-dark" : "card-skills" }>
        <span><i class="devicon-bootstrap-plain colored"></i><span>Bootstrap</span></span>
        <span><i class="devicon-materialui-plain colored"></i><span>Material UI</span></span>
        </JelloDiv>

        <JelloDiv className={theme === "dark" ? "card-skills-dark be" : "card-skills be"}>
        <span><i class="devicon-nodejs-plain colored"></i><span>Node Js</span></span>
        <span> <i class="devicon-postgresql-plain colored"></i><span>Postgres</span></span>
        <span><i class="devicon-mongodb-plain colored"></i><span>Mongo DB</span></span>
        <span><i class="devicon-express-original colored"></i><span>Express Js</span></span>
        </JelloDiv>

        </div>
        <img className="illustrate" src={illustration} alt="illustration" /> 
        </div>

   
    );
};

export default Skills;