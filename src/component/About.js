import React, {useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import Typed from 'typed.js';
import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";
import Aos from 'aos';
import 'aos/dist/aos.css';






const About =() => {

  //creat variable to store icons
  const github = <FontAwesomeIcon icon={faGithub} />;
  const Twitter= <FontAwesomeIcon icon={faTwitter} />;
  const instagram = <FontAwesomeIcon icon ={faInstagram} />
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />



  	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);


  useEffect(() => {
    const options = {
    	strings: [
        'Developer.',
        'Web-Designer.',
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop:true
    };
    
    // elRef refers to the <h1> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
      Aos.init()
    }
  }, [])

    return (
        <section className="about" id='about'>
            <div className="about-img" data-aos={"fade-right"}></div>
            <div className="about-content">
                <div className="about-text">
                    <h1 data-aos={"fade-left"}>About</h1> 
                   
                   <div data-aos={"fade-left"} className='type'><h2 ref={el}></h2></div>
                    <p data-aos={"fade-left"}>I'm Natan.Apassionate Freelancer Bringing you programing and design from the future.
                        I'm Experienced in Developing Web and desktop application including full front end design.
                        This includes brand identity graphics and illustration
                    </p>
                </div>
                <div className='social-links' data-aos={"fade-left"}>
                    <a href='https://github.com/nati2345?tab=repositories'>{github}</a>
                    {/* <a href='#'>{email}</a> */}
                    <a href='https://www.instagram.com/nathantamiru7/?utm_source=qr'>{instagram}</a>
                    <a href='#'> {linkedin}</a>
                    {/* <a href='#'> {facebook}</a> */}
                    <a href='#'> {Twitter}</a>
                </div>
            </div>
        </section>
    )
}

export default About;