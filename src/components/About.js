import React from 'react'
import Skills from './Skills'
import Slide from 'react-reveal/Slide'



const About = () => {
  return <section id="About" className="section has-background-dark">
    <div className="conainer has-text-centered">
      <p className="title has-text-primary">About</p>
      <div className="columns is-centered">
        <Slide left><div className="column has-text-left has-text-secondary is-family-secondary p-6">
          My flair for problem solving and fascination for technology led me to begin self-teaching software development. I discovered a passion for programming while working on my own ecommerce startup, before making the decision to fast-track my learning at General Assembly with a full-stack immersive bootcamp. 
          <br></br>
          <br></br>
          I have been continuing my development during my role as a junior full-stack developer at Primely Digital, working as part of a team in an agile environment. I have gained valuable experience working on projects for various clients using technologies such as React, Gatsby, NextJS, Express, MongoDB, PostgreSQL, Docker, AWS, and Google Cloud/Firebase - among others. 
        </div></Slide>
        <Skills />
      </div>
    </div>
  </section>
}

export default About