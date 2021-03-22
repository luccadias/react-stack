import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const isLogin = true;

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            isLogin ? 
                <Component {...props} />
                :
                <Redirect to='/' />
        )} />
    )
}

PrivateRoute.prototype = {
    component: PropTypes.elementType,
    rest: PropTypes.any
}

export default PrivateRoute;