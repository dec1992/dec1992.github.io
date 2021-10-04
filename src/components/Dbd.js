import React from 'react'
import Image from '../images/dbd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'


const LeftArrow = <FontAwesomeIcon id="projecticon" icon={faArrowAltCircleRight} />

const Dbd = () => {
  return <div>
    <div className="columns is-centered">
      <Slide left>
        <div className="column">
          <figure className="image">
            <img src={Image} alt="project-image"></img>
          </figure>
        </div>
      </Slide>
      <Slide right>
        <div id="project-description" className="column has-text-centered">
          <h2 className="title has-text-link">DBD Stats</h2>
          <div id="underline"></div>
          <p className="has-text-link is-family-secondary p-6">
            A simple app designed to allow players of the online multplayer game, Dead By Daylight, to view their personal stats and progress.
            <br></br>
            <br></br>
            This task was a personal side project, created in order to fulfill the needs of the community for a game that I enjoy. The app was created with React, styled with Sass, and consumes the Steam API to gather player data.
            <br></br>
            <br></br>
          </p>
          <div id="project-links">
            <a href="https://github.com/dec1992/Project-6" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              <i id="projecticon" className=" devicon-github-original-wordmark"></i>
              <p className="help is-family-secondary">github repo</p>
            </a>
            <a href="https://dbd-stats.co.uk/" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              {LeftArrow}
              <p className="help is-family-secondary">go to project</p>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  </div>
}

export default Dbd