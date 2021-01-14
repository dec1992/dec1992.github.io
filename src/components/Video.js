import React from 'react'
import VideoGallery from './VideoGallery'
import Fade from 'react-reveal/Fade'

const Video = () => {


  return <section id="Video" className="section has-text-centered has-background-dark">
    <p className="title has-text-primary">Video</p>
    <Fade>
      <div className="container is-fluid">
        <VideoGallery />
      </div>
    </Fade>
  </section>
}

export default Video