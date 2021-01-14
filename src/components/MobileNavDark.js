import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavDark = () => {


  return <nav id="mobnavlight" className="has-background-dark">
    <div className="container has-text-centered pt-4">
      <Link to="/">
        <p className="has-text-primary">Switch to Software Engineering</p>
      </Link>
    </div>
  </nav>

}

export default MobileNavDark