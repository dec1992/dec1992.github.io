import React from 'react'

// import each project

import Howto from './Howto'
import Spacefrog from './Spacefrog'
import Greenworld from './Greenworld'
import Superseach from './Supersearch'

// get slideindex

const SingleProject = ({ slideIndex }) => {

  // return relevant project

  return <div>
    {slideIndex === 1 ?
      <Howto />
      : null
    }
    {slideIndex === 2 ?
      <Spacefrog />
      : null
    }
    {slideIndex === 3 ?
      <Greenworld />
      : null
    }
    {slideIndex === 4 ?
      <Superseach />
      : null
    }
  </div>

}

export default SingleProject