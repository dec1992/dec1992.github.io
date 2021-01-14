import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Singleproject from './Singleproject'

const slideArray = [1, 2, 3, 4]
const LeftArrow = <FontAwesomeIcon id="arrow" icon={faAngleLeft} />
const RightArrow = <FontAwesomeIcon id="arrow" icon={faAngleRight} />

const Projects = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  function handleNext() {
    let tempSlide = slideIndex
    if (tempSlide === 4) {
      setSlideIndex(1)
    } else {
      setSlideIndex(tempSlide += 1)
    }
  }

  function handlePrevious() {
    let tempSlide = slideIndex
    if (tempSlide === 1) {
      setSlideIndex(4)
    } else {
      setSlideIndex(tempSlide -= 1)
    }
  }

  return <section id="Projects" className="section has-background-primary">
    <div className="container has-text-centered">
      <div className="title">Projects</div>
      <div id="slideNav">
        <div className="has-text-dark" onClick={handlePrevious}>
          {LeftArrow}
        </div>
        {slideArray.map((element, i) => {
          return <div key={i}>
            {slideIndex === element ? <p className="has-text-secondary" id="slideNumber">{element}</p> : <p className="has-text-dark" id="slideNumber">{element}</p>}
          </div>
        })}
        <div className="has-text-dark" onClick={handleNext}>
          {RightArrow}
        </div>
      </div>

    </div>
    <div>
      <Singleproject slideIndex={slideIndex} />
    </div>
  </section>
}

export default Projects