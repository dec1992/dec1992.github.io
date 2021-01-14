import React from 'react'

import PhotoHome from './PhotoHome'
import Gallery from './Gallery'
import Video from './Video'
import PhotoContact from './PhotoContact'
import MobileNavDark from './MobileNavDark'

const Photography = () => {
  return <div>
    <MobileNavDark />
    <PhotoHome />
    <Gallery />
    <Video />
    <PhotoContact />
  </div>
}

export default Photography