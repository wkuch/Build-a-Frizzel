import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Home } from '../pages/Home'
import { HappyBirthday } from '../pages/HappyBirthday'

export const Routing = () => {
  const publicUrl = process.env.PUBLIC_URL
  return(
    <Router>
    <Switch>
      <Route exact path={ publicUrl + '/'} component={Home} />
      <Route path={ publicUrl + '/happy-birthday'} component={HappyBirthday} />
    </Switch>
  </Router>
    )
   
  }