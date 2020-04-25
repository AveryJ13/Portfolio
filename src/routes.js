import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import Landing from './Components/Landing/Landing'
import Projects from './Components/Projects/Projects'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
    </Switch>
)