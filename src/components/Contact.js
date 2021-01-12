import React from 'react'


const Contact = () => {
  return <section className="section has-background-dark">
    <div className="conainer has-text-centered">
      <p className="title has-text-primary">Contact</p>
      <div className="columns is-centered">
        <div className="column is-one-quarter">
          <a id="contact-link" href="https://www.linkedin.com/in/decburns/" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i id="icon" className="devicon-linkedin-plain"></i>
            </div>
            <p className="is-size-7 has-text-primary is-family-secondary">linkedin.com/in/decburns/</p>
          </a>
        </div>
        <div className="column is-one-quarter">
          <a id="contact-link" href="https://github.com/dec1992" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i id="icon" className="devicon-github-plain"></i>
            </div>
            <p className="is-size-7 has-text-primary is-family-secondary">github.com/dec1992</p>
          </a>
        </div>
      </div>

    </div>
  </section>
}

export default Contact