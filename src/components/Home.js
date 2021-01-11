import React from 'react'

const Home = () => {
  return <section className="hero is-dark is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">

          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">
                Home
              </a>
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Projects
              </a>
              <a className="navbar-item">
                Photography
              </a>
              <a className="navbar-item">
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
          Software Engineer | Photographer | Musician
        </p>
      </div>
    </div>
  </section>


}

export default Home