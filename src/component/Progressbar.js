import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";




const Progressbar = (props) => {
    // let [number, setnumber] = useState(0)
  
    const visible = props.visiblity;
    let name = props.name
    const percent = props.percent
    const width = percent
    var pad2 = "calc((590*" + width + ")/100 )"
    const circlesvg = {
      strokeDasharray:pad2,
      strokeDashoffset:pad2,
    }


      // only for one commponent instance
   {/* useEffect( () => {
      
        setInterval(()=> {
          if(counter === percent){
            clearInterval()
            
          }
        else{
          counter += 1;
          setnumber(counter)
          console.log(percent) ;
        }
        }, 1000 )},[c])*/}


        
  return (
        <Wrapper className="progressbar">
            <Outer>
                <Inner>
                    <Number>
                        {percent}%
                    </Number>

                </Inner>
            </Outer>
            <svg xmlns="http://www.w3.org/2000/svg" className="circlesvg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle style={circlesvg} className= {`${visible ? "animate" : ""}`} cx="80" cy="80" r="70" stroke-linecap="round" />
         </svg>
         <Name>{name}</Name>
        </Wrapper>
         


  )
}
const Wrapper = styled.div`
    width: 160px;
    height: 160px;
    position: relative;`

const Outer =styled.div`
height: 160px;
width: 160px;
border-radius: 50%;
padding: 20px;
box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
            -6px -6px 10px -1px rgba(255, 255,255,0.7);`

const Inner =styled.div`
width: 120px;
height: 120px;
border-radius: 50%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 4px 4px 6px -1px rgba(0, 0, 0, 0.2) inset,
            -4px -4px 6px -1px rgba(255,255,255, 0.7) inset,
            -0.5px -0.5px 0px rgba(255, 255, 255, 1),
            0.5px 0.5px 0px rgba(0, 0,0 ,0.15),
            0px 12px 10px -10px rgba(0, 0,0 ,0.05);`

                  
const Number =styled.div`
font-weight: 600;
font-size:25px;
    color: #075b7b;`

const Name = styled.h1`
padding :15px 15px;
fontSize:30px;
fontWeight:400;
color:#075B7B`
export default Progressbar