import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'

import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Home />
    <Switch>
      {/* <Route exact path="/" component={Home}/> */}
    </Switch>
  </BrowserRouter>
)



export default App