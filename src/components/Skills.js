import React, { useState } from 'react'
import Slide from 'react-reveal/Slide'



const Skills = () => {

  const [skillName, updateSkillName] = useState('')
  
  function handleSkill() {
    updateSkillName(event.target.firstChild.id)
  }

  function handleLeave() {
    updateSkillName('')
  }
  
  return <Slide right><div onMouseLeave={handleLeave} className="column has-text-centered">
    <p className="subtitle has-text-primary">Skills</p>
    
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-javascript-plain"><div id="javascript"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-react-plain"><div id="react"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-express-original"><div id="express"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-nodejs-plain"><div id="node.js"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-html5-plain-wordmark"><div id="html5"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-css3-plain-wordmark"><div id="css3"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-sass-plain"><div id="sass"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-npm-original-wordmark"><div id="npm"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-mongodb-plain"><div id="mongodb"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-postgresql-plain-wordmark"><div id="postgrestql"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className="devicon-docker-plain"><div id="docker"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-git-plain"><div id="git"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className="devicon-gatsby-plain"><div id="gatsby"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className="devicon-amazonwebservices-plain-wordmark"><div id="AWS"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-heroku-original"><div id="heroku"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-python-plain"><div id="python"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-photoshop-plain"><div id="photoshop"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-premierepro-plain"><div id="premiere pro"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-aftereffects-plain"><div id="after effects"></div></i>
    </div>
    <div onMouseOver={handleSkill} id ="icon-container" className="icon is-large">
      <i id="icon" className=" devicon-illustrator-plain"><div id="illustrator"></div></i>
    </div>
    <p className="has-text-secondary is-size-6 pt-2">{skillName}</p>
  </div></Slide>
}
export default Skills