import React, { useState, useEffect} from 'react';
import Progressbar from "./Progressbar";
import { VisibilityObserver, useVisibility} from "reactjs-visibility";
import Aos from "aos";
import 'aos/dist/aos.css';



const Skills =() => {
        const[visiblity, setvisiblity] = useState(false)
    
    
      //   const handleVisibility = (visible) => {
      //    if (visible) {
      //       console.log('visible')
      //     setvisible(true)

      //   }
      // };




      const { ref, visible } = useVisibility();

      useEffect(() => {
        if (visible) {
          setvisiblity(true);
        }
        else{
          console.log("hidden")
          setvisiblity(false)
        }
      }, [visible]);


      useEffect(()=>{
        Aos.init()
      },[])

    
    return (
        
        <section className='skill' id ='skills'>
            <div className='skill_wrapper'>
                <div className='skill_text'>
                    <h1> Skills</h1>   
                </div>
                
                  {/* <VisibilityObserver onChangeVisibility={handleVisibility}> */}
                    <div className='skills'  ref={ref}>
                        <Progressbar data-aos={"fade-left"} percent={85} visiblity = {visiblity} name ='HTML & css' />
                        <Progressbar data-aos={"fade-left"} percent={80} name ='React js' visiblity = {visiblity} />
                        <Progressbar data-aos={"fade-left"} percent={75} name ='python' visiblity = {visiblity}/>
                        <Progressbar data-aos={"fade-left"} percent={70} name ='javaScript' visiblity = {visiblity} />
                        <Progressbar data-aos={"fade-left"} percent={65} name ='c++' visiblity = {visiblity} />
                    </div>
                  {/* </VisibilityObserver> */}

            </div>
        
        </section>
    )
  }


export default Skills