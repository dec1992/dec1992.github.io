import React from 'react'
import Image from '../images/supersearch.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'


const LeftArrow = <FontAwesomeIcon id="projecticon" icon={faArrowAltCircleRight} />

const Supersearch = () => {
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
          <h2 className="title has-text-link">Super Search</h2>
          <div id="underline"></div>
          <p className="has-text-link is-family-secondary p-6">
            This is the second project of the software engineering immersive course at GA London. The assignment was to create a react-based web app to be rendered in the browser, using using react along with APIs. The project was to be completed in pairs within 48 hours.
          <br></br>

            <br></br>
          </p>
          <div id="project-links">
            <a href="https://github.com/dec1992/GA-Project-2" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              <i id="projecticon" className=" devicon-github-original-wordmark"></i>
              <p className="help is-family-secondary">github repo</p>
            </a>
            <a href="https://baltasar.tech/project-2/" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              {LeftArrow}
              <p className="help is-family-secondary">go to project</p>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  </div>
}

export default Supersearch