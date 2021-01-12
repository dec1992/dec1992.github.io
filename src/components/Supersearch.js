import React from 'react'
import Image from '../images/supersearch.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const LeftArrow = <FontAwesomeIcon id="projecticon" icon={faArrowAltCircleRight} />

const Supersearch = () => {
  return <div>
    <div className="columns is-centered">
      <div className="column">
        <figure className="image">
          <img src={Image} alt="project-image"></img>
        </figure>
      </div>
      <div id="project-description" className="column has-text-centered">
        <h2 className="title has-text-link">Super Search</h2>
        <div id="underline"></div>
        <p className="has-text-link is-family-secondary p-6">
        This is the second project of the software engineering immersive course at GA London. The assignment was to create a react-based web app to be rendered in the browser, using using react along with APIs. The project was to be completed in pairs within 48 hours.
          <br></br>
          
          <br></br>
        </p>
        <div id="project-links">
          <div id="project-icon-container" className="icon is-large has-text-dark">
            <i id="projecticon" className=" devicon-github-original-wordmark"></i>
            <p className="help is-family-secondary">github repo</p>
          </div>
          <div id="project-icon-container" className="icon is-large has-text-dark">
            {LeftArrow}
            <p className="help is-family-secondary">go to project</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Supersearch