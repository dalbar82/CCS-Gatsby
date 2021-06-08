import React from "react";

import Pic from "../images/creative-services-2017.png";
import "../styles/global.css"


export default function Home() {

  return (
    <div className="big-background">
    <video id="bgndVideo" src="https://ia801203.us.archive.org/13/items/btrupp-0006-palm-trees-15s/btrupp-0006-palm-trees-15s.mp4" autoPlay loop muted />
    <div id="page" className="hfeed site">

    <div id="content" className="site-content">

      <div className="pattern"></div> 
      <div className="carousel-contact">
        <a className="btn" role="button" href="mailto:management@creativeservices.com.au">contact</a>
      </div>

      <div className="big-background-container">
      <img src={Pic} alt="Logo" className="img-responsive"/>
  
          <ul className="carousel-artists">
            <li><a href="https://jamesreyne.com.au" target="_blank" rel="noopener noreferrer" className="artist-link">james reyne</a></li>
            <li><a href="https://thebabyanimals.com" target="_blank" rel="noopener noreferrer" className="artist-link">baby animals</a></li>
            <li><a href="https://www.rosetattoo.com.au" target="_blank" rel="noopener noreferrer" className="artist-link">rose tattoo</a></li>
            <li><a href="https://mondorock.com" target="_blank" rel="noopener noreferrer" className="artist-link">mondo rock</a></li>
            <li><a href="https://palaceofthekingmusic.com" target="_blank" rel="noopener noreferrer" className="artist-link">palace of the king</a></li>
            <li><a href="https://modelsband.com" target="_blank" rel="noopener noreferrer" className="artist-link">models</a></li>
            <li><a href="https://boomcrashopera.com" target="_blank" rel="noopener noreferrer" className="artist-link">boom crash opera</a></li>
            <li><a href="https://thepoorband.com" target="_blank" rel="noopener noreferrer" className="artist-link">the poor</a></li>
          </ul>
      </div>                                                    
    </div>

    </div>
    
  </div>
);
}


