import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"
import { Home } from '../pages/Home'
import { HappyBirthday } from '../pages/HappyBirthday'

export const Routing = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/happy-birthday' component={HappyBirthday} />
    </Switch>
  </Router>
    )