import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'


import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Home />
    <About />
    <Switch>
      {/* <Route exact path="/" component={Home}/> */}
    </Switch>
  </BrowserRouter>
)



export default App