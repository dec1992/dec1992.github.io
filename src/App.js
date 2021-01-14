import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
import Photography from './components/Photography'
import Portfolio from './components/Portfolio'


import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Portfolio}/>
      <Route exact path="/Photography" component={Photography}/>
    </Switch>
    {/* <Home />
    <About />
    <Projects />
    <Contact /> */}
  </BrowserRouter>
)



export default App