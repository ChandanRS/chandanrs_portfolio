import React from 'react';
import dp from '../images/crs.jpg'
const About = () => {
    return (
        <div id="about" className="banner">
            <div className="my-info">  
            <img className= "profile-pic" src={dp} alt="dp" />
                <div className= "banner-title" >Chandan Shetti</div>
                <div className="banner-subtitle">A JavaScript Enthusiast, Web Developer</div>
           
            <div className="contact-container">
            <div  className="contact">
             <a href="https://github.com/ChandanRS" target="_blank" rel="noreferrer"><i className="fab sm fa-2x fa-github"></i></a>
            </div>
            <div  className="contact">
                <a href="https://www.linkedin.com/in/chandan-shetti-1758ba131" target="_blank" rel="noreferrer"><i className="fab  sm fa-2x  fa-linkedin"></i></a>
            </div>
            <div  className="contact">
                <a href="https://twitter.com/chandan_shetti" target="_blank" rel="noreferrer"><i className="fab sm fa-2x fa-twitter"></i></a>
            </div>
            <div  className="contact">
                <a href="https://www.facebook.com/chandan.shetti" target="_blank"  rel="noreferrer"><i className="fab  sm fa-2x fa-facebook"></i></a>
            </div>
            {/* <div  className="contact">
                <img id="gmail" className="contact-logo" src="https://www.greenmellenmedia.com/wp-content/uploads/2014/05/gmail-icon.png" alt="img_gmail" />
            </div> 
             <div id="email-id">chandanshetti149@gmail.com</div>  */}
        </div>
        </div>
        </div>
        
    );
};

export default About;