import React from 'react'
import Image from '../images/greenworld.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'


const LeftArrow = <FontAwesomeIcon id="projecticon" icon={faArrowAltCircleRight} />

const Greenworld = () => {
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
          <h2 className="title has-text-link">Green World</h2>
          <div id="underline"></div>
          <p className="has-text-link is-family-secondary p-6">
            We chose to build a platform to help you live a greener life: GreenWorld. The idea was to enable users to easily find local businesses and services that lower the carbon footprint (Vegan/vegetarian restaurants, cycling shops, ethical groceries, EV charging stations, repair shops, charity shops etc.).
          <br></br>
            <br></br>
          This task involved working together to develop a Full Stack application using the core technologies of - MongoDB, Javascript, Express and React. This Project took place over 6 working days.
          <br></br>
            <br></br>
          </p>
          <div id="project-links">
            <a href="https://github.com/dec1992/GA-Project-3" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              <i id="projecticon" className=" devicon-github-original-wordmark"></i>
              <p className="help is-family-secondary">github repo</p>
            </a>
            <a href="https://greenworld-p3.herokuapp.com/" target="_blank" rel="noreferrer" id="project-icon-container" className="icon is-large has-text-dark">
              {LeftArrow}
              <p className="help is-family-secondary">go to project</p>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  </div>
}

export default Greenworld