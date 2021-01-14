import React from 'react'
import Image from '../images/frogger.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'


const LeftArrow = <FontAwesomeIcon id="projecticon" icon={faArrowAltCircleRight} />

const Spacefrogger = () => {
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
          <h2 className="title has-text-link">Space Frogger</h2>
          <div id="underline"></div>
          <p className="has-text-link is-family-secondary p-6">
            This is my first project of the software engineering immersive course at GA London. The assignment was to create a grid-based game to be rendered in the browser, using HTML, CSS and JavaScript. The project was to be completed individually within one week.
          <br></br>
            <br></br>
          Given a list of options from GA, I chose to re-create the classic game Frogger.
          <br></br>
            <br></br>
          </p>
          <div id="project-links">
            <a href="https://github.com/dec1992/GA-Project-1" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              <i id="projecticon" className=" devicon-github-original-wordmark"></i>
              <p className="help is-family-secondary">github repo</p>
            </a>
            <a href="https://dec1992.github.io/GA-Project-1/" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              {LeftArrow}
              <p className="help is-family-secondary">go to project</p>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  </div>
}

export default Spacefrogger