import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Typing from 'react-typing-animation'

const DownArrow = <FontAwesomeIcon id="arrow-static" icon={faAngleDown} />

const Home = () => {
  return <section className="hero is-primary is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">

          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">

              <a href="#About" id="whitelink" className="navbar-item">
                About
              </a>
              <a href="#Projects" id="whitelink" className="navbar-item">
                Projects
              </a>
              <Link to="/Photography" id="whitelink" className="navbar-item">
                Photography
              </Link>
              <a href="#Contact" id="whitelink" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">
        <Typing>
          <p className="title">
            Dec Burns
          </p>

          <p className="subtitle mb-0">
            <a href="#Projects" id="whitelink">Software Engineer</a> | <Link to="/Photography" id="whitelink">Photographer</Link> | <a href="https://www.youtube.com/watch?v=es3SWImE2yw" id="whitelink" target="_blank" rel="noopener noreferrer">Musician</a>
          </p>
          <Typing.Delay ms={3000} />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div>
            <p className="is-size-6">{DownArrow} learn more about <a href="#About" id="whitelink-line">my skills</a> and <a href="#Projects" id="whitelink-line">my projects</a> {DownArrow} </p>


          </div>

        </Typing>

      </div>
    </div>
    {/* <div id="scroll" className="has-text-centered">
      <a href="#About" className="has-text-dark">{DownArrow}</a>
    </div> */}
  </section>


}

export default Home