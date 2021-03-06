import React from 'react'
import Image from '../images/howto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'


const LeftArrow = <FontAwesomeIcon id="projecticon" icon={faArrowAltCircleRight} />

const Howto = () => {
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
          <h2 className="title has-text-link">How To Tube</h2>
          <div id="underline"></div>
          <p className="has-text-link is-family-secondary p-6">
            This project was a Group Programming task - set as part of the Software Engineering Immersive Course from General Assembly.
          <br></br>
            <br></br>
          This task involved working together to develop a Full Stack application using the core technologies of - PostgreSQL, Python, Flask and React. This Project took place over 6 working days. Whilst we are all familiar with React and JavaScript - SQL databases and Python & Flask are new technologies to us - so this was both a practicing and learning experience.
          <br></br>
            <br></br>
          </p>
          <div id="project-links">
            <a href="https://github.com/dec1992/GA-Project-4" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              <i id="projecticon" className=" devicon-github-original-wordmark"></i>
              <p className="help is-family-secondary">github repo</p>
            </a>
            <a href="https://howtotube.herokuapp.com/" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              {LeftArrow}
              <p className="help is-family-secondary">go to project</p>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  </div>
}

export default Howto