import React, { Component } from 'react';
import { faGithub, faFacebook, faTwitter, faInstagram, faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const github = <FontAwesomeIcon icon={faGithub} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const Twitter= <FontAwesomeIcon icon={faTwitter} />;
const instagram = <FontAwesomeIcon icon ={faInstagram} />
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />


export default class Footer extends Component {
    
  render() {
    return (
        <div class="footer">
            <h1>copyright
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M15.536,8.464A1,1,0,0,0,16.95,7.05a7,7,0,1,0,0,9.9,1,1,0,0,0-1.414-1.414,5,5,0,1,1,0-7.072Z"/></svg>Natan Tamiru s.l All right reserved.
            </h1>

            <div className="links">
                <a href="">{instagram}
                </a>
                <a href="#">
                       {github} 
                </a>
                <a href="#">
                    {Twitter}
                </a>
                <a href="#">
                    {linkedin}
                </a> 
            </div>

        </div>
    )
  }
}
