import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Signup from '../ui/Signup'
import Dashboard from '../ui/Dashboard'
import NotFound from '../ui/NotFound'
import Login from '../ui/Login'

const unauthenticatedPages = ['/', '/signup']
const authenticatedPages = ['/dashboard']

const onEnterPublicPages = () => {
    if(Meteor.userId()) {
        browserHistory.replace('/dashboard')
    }
}

const onEnterPrivatePages = () => {
    if(!Meteor.userId()) {
        browserHistory.replace('/')
    }
}

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname
    const isUnAuthenticatedPage = unauthenticatedPages.includes(pathname)
    const isAuthenticatedPage = authenticatedPages.includes(pathname)

    if(isUnAuthenticatedPage && isAuthenticated) {
        browserHistory.replace('/dashboard')
    } else if(isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/')
    }
}

export const routes = (
    <Router history={browserHistory}>
        <Route path='/signup' component={Signup} onEnter={onEnterPublicPages} />
        <Route path='/dashboard' component={Dashboard} onEnter={onEnterPrivatePages} />
        <Route path='/dashboard/:id' component={Dashboard} onEnter={onEnterPrivatePages} />
        <Route path='/' component={Login} onEnter={onEnterPublicPages} />
        <Route path='*' component={NotFound} />
    </Router>
)