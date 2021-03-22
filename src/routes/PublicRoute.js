import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        <Component {...props} />
    )} />
)

PublicRoute.prototype = {
    rest: PropTypes.any
}

export default PublicRoute