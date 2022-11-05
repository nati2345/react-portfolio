import React, {useEffect} from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const description = "web-developer/web designer."

const  Home = ()=>{

    // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
    // Create reference to store the Typed instance itself
      const typed = React.useRef(null);
  
    useEffect(() => {
      const options = {
          strings: ['Hello, my name is Natan.'],
        typeSpeed: 100,
      };
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])


        return(
            <section className="home" id='home'>
                <div className="hero">
                     <div className="hero-img"></div>
                    <div className="hero-text">
                    <div  className="type">
                        <h1 ref={el}></h1>
                    </div>
                    <h3>{description}</h3>
                    {/* <Fade left><Link to="contact" duration={500} smooth={true}><button className="hero_btn">{hero_btn}</button></Link></Fade> */}
                    </div>
                    <Link to="about" smooth={true} duration={500}>
                        <div className="downicon">
                            <FontAwesomeIcon icon={faAngleDown} className={"fa-2x"} />
                        </div>
                    </Link>
                </div>
            </section>
        );
    }

export default Home;