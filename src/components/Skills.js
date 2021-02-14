import React, { Fragment } from 'react';
import '../scss/Skills.scss'

const Skills = () => {
    return (
        <Fragment>
       <div className="My-Skills">MY SKILLS</div>
        <div id ="skills" className="skill-container">
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

        <div className="skill">
        <i className="fab  skill fa-5x fa-node"></i>
                <div className="skill-text">Node JS</div>
        </div>

        <div className="skill">
        <i class="fas skill fa-5x fa-database"></i>
                <div className="skill-text"> Mongo DB</div>
        </div>

        <div className="skill">
        <i className="fab skill fa-5x fa-bootstrap"></i>
            <div className="skill-text"> Bootstrap 4</div>
        </div>

    </div>
    </Fragment>
    );
};

export default Skills;