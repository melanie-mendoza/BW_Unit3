// a HOC that wraps Route and checks for the token. 
// If it doesn't exist, user will be redirected to /login. 
// If it does exist, it will pass through the Route as normal.
// Use this in place of Route for components that require the token. 
// import ProtectedRoute in App.js and use it in place of Route in Profile.

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem('token')) {
                return <Component {...renderProps} />    
            } else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

export default ProtectedRoute;