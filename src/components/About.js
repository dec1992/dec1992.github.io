import React from 'react'
import Skills from './Skills'
import Slide from 'react-reveal/Slide'



const About = () => {
  return <section id="About" className="section has-background-dark">
    <div className="conainer has-text-centered">
      <p className="title has-text-primary">About</p>
      <div className="columns is-centered">
        <Slide left><div className="column has-text-left has-text-secondary is-family-secondary p-6">
          My flair for problem solving and fascination for technology led me to begin self-teaching software development. I discovered a passion for programming while working on an ecommerce website, before expanding my knowledge with books and online resources.
          <br></br>
          <br></br>
          I made the decision to fast-track my learning at General Assembly with a full-stack immersion into JavaScript, Node.js, PostgreSQL, MongoDB, Python with Flask and an overall focus on a MERN stack. I’m now looking to progress my career in the tech industry as a junior developer.

        </div></Slide>
        <Skills />
      </div>
    </div>
  </section>
}

export default About