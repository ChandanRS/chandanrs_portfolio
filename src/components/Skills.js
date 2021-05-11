import React, { Fragment } from 'react';
import '../scss/Skills.scss'
import styled, { keyframes } from 'styled-components';
import { bounceInRight,bounceInLeft,jello } from 'react-animations';

const bounceInRightAnim = keyframes`${bounceInRight}`;
const JelloAnim = keyframes`${jello}`;



const JelloDiv = styled.div`
  animation: 2s ${JelloAnim};
`;


const Skills = () => {
    return (
        <div className="Container">
        <div id ="skills" className="My-Skills">What I've Learnt</div>
        {/* <div  className="skill-container">
            <div className="skill">
            <i className="fab skill fa-5x fa-html5"></i>
                <div className="skill-text">
                    Html
                </div>
            </div>

        
        <div className="skill">
        <i className="fab skill fa-5x fa-css3"></i>
            <div className="skill-text">
                Css
            </div>
        </div>
        
        <div className="skill">
        <i className="fab skill fa-5x fa-js"></i>
           
            <div className="skill-text">
                JavaScript
            </div> 
        </div>
        <BounceRight className="skill">
        <i className="fab skill fa-5x fa-react"></i>
                <div className="skill-text">React JS</div>
        </BounceRight> */}
        {/* <div className="skill">
        <i className="fab  skill fa-5x fa-node"></i>
                <div className="skill-text">Node JS</div>
        </div>

        <div className="skill">
        <i className="fab  skill fa-5x fa-node"></i>
                <div className="skill-text">Express JS</div>
        </div>

        <div className="skill">
        <i className="fab  skill fa-5x fa-node"></i>
                <div className="skill-text">Material UI</div>
        </div>

        <div className="skill">
        <i className="fas skill fa-5x fa-database"></i>
                <div className="skill-text"> Mongo DB</div>
        </div>

        <div className="skill">
        <i className="fab skill fa-5x fa-bootstrap"></i>
            <div className="skill-text"> Bootstrap 4</div>
        </div> */}
        

        <div  className="skill-container">
        <h3>Front End</h3>
        <h3>UI Frameworks</h3>
        <h3>Back End</h3>
        <JelloDiv className="card-skills fe">
        <span><i class="devicon-html5-plain colored"></i><span>HTML</span></span>
        <span> <i class="devicon-css3-plain-wordmark colored"></i><span>CSS 3</span></span>
        <span><i class="devicon-javascript-plain colored"></i><span>JavaScript</span></span>
        <span><i class="devicon-react-original colored"></i><span>React</span></span>
        <span><i class="devicon-redux-original colored"></i><span>Redux</span></span>
        </JelloDiv>

        <JelloDiv className="card-skills">
        <span><i class="devicon-bootstrap-plain colored"></i><span>Bootstrap</span></span>
        <span><i class="devicon-materialui-plain colored"></i><span>Material UI</span></span>
        </JelloDiv>

        <JelloDiv className="card-skills be">
        <span><i class="devicon-nodejs-plain colored"></i><span>Node Js</span></span>
        <span> <i class="devicon-postgresql-plain colored"></i><span>Postgres</span></span>
        <span><i class="devicon-mongodb-plain colored"></i><span>Mongo DB</span></span>
        <span><i class="devicon-express-original colored"></i><span>Express Js</span></span>
        </JelloDiv>
        </div>

        </div>

   
    );
};

export default Skills;