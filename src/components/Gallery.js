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
            source: 'https://i.imgur.com/NlxrygW.jpg'
          },
          {
            source: 'https://i.imgur.com/HkKa66I.jpg'
          },
          // {
          //   source: 'https://i.imgur.com/EIUxOIy.jpg'
          // },
          {
            source: 'https://i.imgur.com/T06oOUS.jpg'
          },
          {
            source: 'https://i.imgur.com/RkitxfL.jpg'
          },
          {
            source: 'https://i.imgur.com/9Ce6ryd.jpg'
          },
          {
            source: 'https://i.imgur.com/EwDTAS4.jpg'
          },
          {
            source: 'https://i.imgur.com/qTfyK95.jpg'
          },
          // {
          //   source: 'https://i.imgur.com/ZbRtbuA.jpg'
          // },
          // {
          //   source: 'https://i.imgur.com/A3yht2F.jpg'
          // },
          {
            source: 'https://i.imgur.com/Rc9IHjV.jpg'
          },
          {
            source: 'https://i.imgur.com/L7jviZb.jpg'
          },
          // {
          //   source: 'https://i.imgur.com/Z1DNXci.jpg'
          // },
          {
            source: 'https://i.imgur.com/2J2Hzdl.jpg'
          },
          {
            source: 'https://i.imgur.com/kASWL15.jpg'
          },
          {
            source: 'https://i.imgur.com/uUoG2mY.jpg'
          }
          // {
          //   source: 'https://i.imgur.com/XSh9S5n.jpg'
          // }
          // {
          //   source: 'https://i.imgur.com/pb8vdi8.jpg'
          // },
          // {
          //   source: 'https://i.imgur.com/1KhDQVt.jpg'
          // },
          // {
          //   source: 'https://i.imgur.com/ugEBWva.jpg'
          // },
          // {
          //   source: 'https://i.imgur.com/HrMrwlj.jpg'
          // }
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