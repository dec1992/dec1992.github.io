import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'


const MailIcon = <FontAwesomeIcon id="icon" icon={faMailBulk} />


const Contact = () => {
  return <section id="Contact" className="section has-background-dark">
    <div className="container has-text-centered">
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
        <div className="column is-one-quarter">
          <a id="contact-link" href="mailto:deaglanburns@msn.com" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              {MailIcon}
            </div>
            <p className="is-size-7 has-text-primary is-family-secondary">deaglanburns@msn.com</p>
          </a>
        </div>
      </div>

    </div>
  </section>
}

export default Contact