import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from '../pages/home'
import { Albums } from '../pages/albums'

export const App = () => {

  return (
    <Router>
      <Switch>
        <Route  path='/' exact component={Home} />
        <Route  path='/albums' exact component={Albums} />
      </Switch>
    </Router>
  )
}