import React, { useEffect,useState } from 'react';
import "../App.css";
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";



const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [ menu_class, setMenuClass] =useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] =useState(false)
    const [show, setShow] = useState(true)


    
    const updateMenu = ()=> {
        setIsMenuClicked(!isMenuClicked)
        if(isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        console.log(isMenuClicked)
    }


    const controlNavbar = ()=>{
        if (window.scrollY > 862){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
    useEffect(() => {
      window.addEventListener("scroll", controlNavbar)
    
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }, [])
    // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1100px)'});
    // const isMobile = useMediaQuery({query: '(max-width: 1099px)'})
    
  return (
        <Fade top>
            <nav className={show ? 'nav':'nav nav_show'}>
                <div className='burger-menu' onClick={updateMenu} >
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>

                </div>
                <div className={menu_class}>
                    <Link to="home" spy={true} smooth={true} duration={500} activeClass='active'>Home</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} activeClass='active'>About</Link>
                    <Link to="project" spy={true} smooth={true} duration={500} activeClass='active'>Project</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} activeClass='active'>Contact</Link>
                </div>
                <ul className="nav-link">
                    <li><Link to="home" spy={true} smooth={true} duration={500} activeClass='active'>Home</Link></li>
                    <li><Link to='about'  spy={true} smooth={true} duration={500} activeClass='active'>About</Link></li>
                    <li><Link to='project'  spy ={true}smooth={true} duration={500} activeClass='active'>Project</Link></li>
                    <li><Link to='contact' spy={true} smooth={true} duration={500} activeClass='active'>Contact</Link></li>
                </ul>
            </nav>
        </Fade>
  )
}

export default Navbar