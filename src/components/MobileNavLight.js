import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavLight = () => {


  return <nav id="mobnavlight" className="has-background-primary">
    <div className="container has-text-centered pt-4">
      <Link to="/Photography">
        <p className="has-text-dark">Switch to Photography</p>
      </Link>
    </div>
  </nav>

}

export default MobileNavLight