import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter, NavLink, Route} from 'react-router-dom'

import Home from './Home'
import Friends from './Friends'
import Support from './Support'
import Profile from './Profile'

export default class Website extends React.Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1>This will be the container of demo</h1>
                <div className="header1">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/friends">Friends</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/support">Support</NavLink></li>
                </ul>

                </div>
                <div className="content1">
                <Route exact path="/" component={Home}></Route>
                <Route path="/friends" component={Friends}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/support" component={Support}></Route>

                </div>
                </div>
             </HashRouter>
        )
    }
}