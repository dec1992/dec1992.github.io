import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Typing from 'react-typing-animation'

const DownArrow = <FontAwesomeIcon id="arrow" icon={faAngleDown} />

const Home = () => {
  return <section className="hero is-dark is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">

          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">

              <a href="#Gallery" id="whitelink" className="navbar-item has-text-primary">
                Gallery
              </a>
              <a href="#Video" id="whitelink" className="navbar-item has-text-primary">
                Video
              </a>
              <Link to="/" id="whitelink" className="navbar-item has-text-primary">
                Software Engineering
              </Link>
              <a href="#Contact" id="whitelink" className="navbar-item has-text-primary">
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
          <p className="title has-text-primary">
            Dec Burns
          </p>
          <p className="subtitle has-text-primary">
            <a href="#Gallery" id="whitelink" className="has-text-primary">Photographer</a> | <Link to="/" id="whitelink" className="has-text-primary">Software Engineer</Link> |  <a href="https://www.youtube.com/watch?v=es3SWImE2yw" id="whitelink" target="_blank" rel="noopener noreferrer" className="has-text-primary">Musician</a>
          </p>
        </Typing>
      </div>
    </div>
    <div id="scroll" className="has-text-centered">
      <a href="#Gallery" className="has-text-primary">{DownArrow}</a>
    </div>
  </section>


}

export default Home