import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
function Cardp(props)
{
    return(
        <div>
   
   <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={props.img}/>
        </div>
        <div className="team-content">
          <br/>
          <h2 className="name">{props.name}</h2>
          <h3 className="title">{props.title}</h3>
        </div>
        <ul className="social">
          
          <li><a href={props.urlgit} class="fa fa-google-plus" aria-hidden="true"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
          <li><a href={props.urllink}  class="fa fa-linkedin" aria-hidden="true"><FontAwesomeIcon icon={faLinkedin} size="2x" />
</a></li>
        </ul>
      </div>
    </div>
        
    )
}

export default Cardp;