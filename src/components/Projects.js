import React,{Fragment} from 'react';
import projectsArr from '../projectsData/projectsData.json'

const Projects = (props) => {
    return (
       
        projectsArr.map(pr=>(
            <Fragment>
            <div className="portfolio-title">PROJECTS</div>
            <div id="projects" className="projects-container">
                <div id="bookhouse" className="project-details">
                    <img className="projectImage" src={require('../images/projectImages/'+pr.image+'.png').default} alt="projectImage" />
                    <div className="project-title">{pr.title}</div>
                    <div className="links">
                    <a href={pr.github} target="_blank" rel="noreferrer"><i className="fab project-icons fa-2x fa-github"></i></a>
                    <a href={pr.video} target="_blank" rel="noreferrer"><i class="fas project-icons fa-2x fa-video"></i></a>
                    <a href={pr.live} target="_blank" rel="noreferrer"><i className="fas project-icons fa-2x fa-link"></i></a>
                    </div>
                <div className="project-desc">{pr.description}</div>
                {/* <div>{pr.tools}</div> */}
                <div className="tools">
                {pr.tools.split(",").map(tool=>(
                    <div style={{'color':'purple'}}>{tool}</div>
                ))}
                </div>
                </div> 
            </div>
            
            </Fragment>
    ))
     
    );
};

export default Projects;








 