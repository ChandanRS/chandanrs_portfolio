import React from 'react';
import '../scss/Footer.scss'


const Footer = () => {
    return (
        <div className="main-container-footer">
            <h2>Say hello! 👋</h2>
        <section className="footer-container">
            <article className="left">
            <h2>Chandan Shetti</h2>
            <p>I build engaging, fast and high quality websites that users will love. I specialize in JavaScript. I'm a web developer in Bengaluru, India.</p>
            <div  className="contact">
                <a href="https://github.com/ChandanRS" target="_blank" rel="noreferrer"><i className="fab sm fa-2x fa-github"></i></a>
                <a href="https://www.linkedin.com/in/chandan-shetti-1758ba131" target="_blank" rel="noreferrer"><i className="fab  sm fa-2x  fa-linkedin"></i></a>
                <a href="https://twitter.com/chandan_shetti" target="_blank" rel="noreferrer"><i className="fab sm fa-2x fa-twitter"></i></a>
                <a href="https://www.facebook.com/chandan.shetti" target="_blank"  rel="noreferrer"><i className="fab  sm fa-2x fa-facebook"></i></a>
                <a href="https://www.instagram.com/chandanrs06/" target="_blank"  rel="noreferrer"><i className="fab  sm fa-2x fa-instagram"></i></a>
            </div>
            </article>
            <div className="mail">
            <p>If you would like to talk to me about something that could interest me, please send me an email at <a href="mailto:chandanshetti149@gmail.com" target="_blank"  rel="noreferrer">chandanshetti149@gmail.com</a>. I check my inbox a couple times during the week.</p>
            <p className="madeBy">Made by Chandan @2021</p>
            </div>
        </section>
        </div>
    );
};

export default Footer;