import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../../components/Login'
import Signup from '../../components/Signup'

export default function AuthenticationContainer() {
    return(
        <Router>
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}