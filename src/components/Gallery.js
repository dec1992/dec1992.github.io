import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const LinkIcon = <FontAwesomeIcon id="projecticon" icon={faArrowAltCircleRight} />


const Gallery = () => {

  return <section id="Gallery" className="section has-text-centered has-background-primary">
    <p className="title has-text-dark">Gallery</p>
    <div className="container is-fluid">
      <AwesomeSlider

        media={[
          {
            source: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
          },
          {
            source: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
          },
          {
            source: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'
          }
        ]}
      />
    </div>
    <div className="container has-text-centered mt-6">
      <div className="columns is-centered mt-6">
        <div className="column is-one-quarter mt-4">
          <a id="contact-link-dark" href="https://www.instagram.com/_dbphoto_" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              {LinkIcon}
            </div>
            <p className="is-size-7 has-text-dark is-family-secondary">More photos on Instagram</p>
          </a>
        </div>
      </div>
    </div>

  </section>
}

export default Gallery