import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const DownArrow = <FontAwesomeIcon id="arrow" icon={faAngleDown} />

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
        <p className="title">
          Dec Burns
        </p>
        <p className="subtitle">
          <a href="#Projects" id="whitelink">Software Engineer</a> | <Link to="/Photography" id="whitelink">Photographer</Link> | <a href="https://www.youtube.com/watch?v=es3SWImE2yw" id="whitelink" target="_blank" rel="noopener noreferrer">Musician</a>
        </p>
      </div>
    </div>
    <div id="scroll" className="has-text-centered">
      <a href="#About" className="has-text-dark">{DownArrow}</a>
    </div>
  </section>


}

export default Home