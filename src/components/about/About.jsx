import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about' className='center-me-vert container-md min-vh-container'>
      <div className='container-about all-vh'>
        
          <h1 className="center-text" id="about-h5">About Me</h1>
        
        <div className='bottom'>
            <p className="about-p text-shadow"
            >I enjoy creating digital products, both designing and developing them. I have studied art and informatic engineering at Universidad de la Sabana, fields which I consider essential for what I do.
              <br /><br />I am focused on creating products centered on people. Products that are accessible, practical, scalable and aesthetic.
              <br /><br />The tools I use vary depending on the project, usually for design I’ll use Figma, Photoshop and Illustrator. Aside from that I’ve also experience in Adobe Xd and Invision. For front end development I have skills in HTML, CSS and React.js
            </p>
            <div>
            <img className="portrait"
              src={require('../../assets/yo en azul.png')}
              alt="portrait of Felipe Andrade tinted blue"
            />
            </div>
        </div>
      </div>
    </section>
  )
}

export default About