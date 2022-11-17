import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Projects extends Component {
  render() {
    return (
      <section className='projects' id='project'>
        <div className='project_wrapper'>
          {/* <h1>Projects</h1> */}
          <div className='project_1'>
              <div className='project_text' >
                  <h1 data-aos={"fade-right"}>Portfolio Website</h1>
                  <p data-aos={"fade-right"}>This project is portfolio website done with react. </p>
                      <button className='project_btn' data-aos={"fade-right"}>Live Demo</button><a href='https://github.com/nati2345/react-portfolio'  className='sourcecode' data-aos={"fade-right"}>Source Code</a>
              </div>
              <div data-aos={"fade-left"} className='portfolioimg'></div>
          </div>
          <div className='project_1'>
              <div className='project_text' >
                  <h1 data-aos={"fade-right"}>Gym website</h1>
                  <p data-aos={"fade-right"}>This is gym website done with html and css. design and developed by me. check it out annd let me know!</p>
                  <button className='project_btn' data-aos={"fade-right"}>Live Demo</button><a href='https://nati2345.github.io/html-gym-website/' className='sourcecode' data-aos={"fade-right"}>Source Code</a>
              </div>
              <div className='gymimg' data-aos={"fade-left"}></div>
          </div>
          <div className='project_1'>
          <div className='formimg' data-aos={"fade-right"}></div>
              <div className='project_text' >
                  <h1 data-aos={"fade-left"}>React form</h1>
                  <p data-aos={"fade-left"}>This project is a react form. using material ui. Material UI is an open-source React component library that implements Google's Material Design.</p>
                      
                 <button className='project_btn' data-aos={"fade-left"}>Live Demo</button><a href='' className='sourcecode'>Source Code</a>
              </div>
        </div>
        </div>
      </section>
    )
  }
}
export default Projects
