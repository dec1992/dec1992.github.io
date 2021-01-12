import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Home />
    <About />
    <Projects />
    <Contact />
    <Switch>
      {/* <Route exact path="/" component={Home}/> */}
    </Switch>
  </BrowserRouter>
)



export default App