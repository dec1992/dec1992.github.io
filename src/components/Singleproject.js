import React from 'react'

// import each project

import Dbd from './Dbd'
import Howto from './Howto'
import Spacefrog from './Spacefrog'
import Greenworld from './Greenworld'
import Superseach from './Supersearch'

// get slideindex

const SingleProject = ({ slideIndex }) => {

  // return relevant project

  return <div>
    {slideIndex === 1 ?
      <Dbd />
      : null
    }
    {slideIndex === 2 ?
      <Howto />
      : null
    }
    {slideIndex === 3 ?
      <Spacefrog />
      : null
    }
    {slideIndex === 4 ?
      <Greenworld />
      : null
    }
    {slideIndex === 5 ?
      <Superseach />
      : null
    }
  </div>

}

export default SingleProject