import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  notAuthorizedPath: PropTypes.string
}

const defaultProps = {}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { location } = rest
  const isAuthenticated = location.pathname === '/protected/true'

  return (
    <Route {...rest} render={props => {
      const toPath = rest.notAuthorizedPath
      return (
        isAuthenticated ? (<Component {...props} />) : (<Redirect to={{
          pathname: toPath,
          state: { from: props.location }
        }} />)
      )
    }
    } />
  )
}

ProtectedRoute.propTypes = propTypes

ProtectedRoute.defaultProps = defaultProps

export default ProtectedRoute
