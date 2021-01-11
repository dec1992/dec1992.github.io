import React from 'react'

const Home = () => {
  return <section className="hero is-primary is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">

          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
      
              <a id="whitelink" className="navbar-item">
                About
              </a>
              <a id="whitelink" className="navbar-item">
                Projects
              </a>
              <a id="whitelink" className="navbar-item">
                Photography
              </a>
              <a id="whitelink" className="navbar-item">
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
          <a id="whitelink">Software Engineer</a> | <a id="whitelink">Photographer</a> | <a id="whitelink">Musician</a>
        </p>
      </div>
    </div>
  </section>


}

export default Home