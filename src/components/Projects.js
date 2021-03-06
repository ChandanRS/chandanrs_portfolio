import React,{Fragment} from 'react';
import projectsArr from '../projectsData/projectsData.json'
import "../scss/Projects.scss"
import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

const slideInUpAnim = keyframes`${slideInUp}`;

const SlideInDivUp = styled.div`
  animation: 1s ${slideInUpAnim};
`;
const Projects = (props) => {
  const theme = localStorage.getItem("theme")

    return (
        <div id="projects" className="projects-main-container">
        <div className="projects-title">What I've Built</div>
        <div className="projects-contents">
       { projectsArr.map(pr=>
            <SlideInDivUp  className="projects-container">
                <div id="bookhouse" className={theme === "dark" ? "project-details-dark" : "project-details" }>
                    <div className="project-title">{pr.title}</div>
                    <img className="projectImage" src={require('../images/projectImages/'+pr.image+'.png').default} alt="projectImage" />
                    <div className="links">
                    <a href={pr.github} target="_blank" rel="noreferrer"><i className="fab project-icons fa-2x fa-github"></i></a>
                    { pr.video && <a href={pr.video} target="_blank" rel="noreferrer"><i className="fas project-icons fa-2x fa-video"></i></a>}
                    <a href={pr.live} target="_blank" rel="noreferrer"><i className="fas project-icons fa-2x fa-link"></i></a>
                    </div>
                <div className="project-desc">{pr.description}</div>
                {/* <div>{pr.tools}</div> */}
                <div className="tools">
                {pr.tools.split(",").map(tool=>(
                    <div className="tool">{tool}</div>
                ))}
                </div>
                </div> 
            </SlideInDivUp>
    )}
    </div>
    </div>
    );
};

export default Projects;








 