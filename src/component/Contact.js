import React, { Component } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';

export default class Contact extends Component {

    componentDidMount(){
        Aos.init()
    }
  render() {
    return (
        <section class="contact" id ='contact'>
            <div className='contact_wrraper'>
                <div class="contact-text">
                    <h1 data-aos={"fade-up"}>CONTACT</h1>
                    <h2 data-aos={"fade-up"}>GOT A PROBLEM TO SOLVE ?</h2>
                    <p data-aos={"fade-up"}>GET YOUR SPACE READY AND TELL ME YOUR IDEAS TO DEVELOP YOUR
                        DREAM APPLICATION.</p>
                </div>
                <div className="input">
                    <div className="email">
                        <input type="email" id="inputs" placeholder='Email' data-aos={"fade-up"}/>
                    </div>
                    <div className="email">
                        <input type="email" id="inputs" placeholder='Name'data-aos={"fade-up"}/>
                    </div>
                    <div className="email">
                        <textarea id="message" placeholder='type your message here' data-aos={"fade-up"}></textarea>
                        <button data-aos={"fade-up"}>send</button>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
