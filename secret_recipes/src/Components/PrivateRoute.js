import React from 'react'
import { Router, Redirect } from 'react-router-dom'


const PrivateRoute = props => {
    if(localStorage.getItem('token')) {
        return (
            <Route {...props} />
        )

        return (
            <Redirect to = '/' /*login page*/ />
        )
    }
}