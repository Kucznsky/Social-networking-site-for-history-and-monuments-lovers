import {Route, Navigate} from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({children, ...rest}) => {
  
  const authenticated = false

  return (
    <Route{...rest}>{!authenticated ? <Navigate to="/login"></Navigate> : children}</Route>
  )
}

export default PrivateRoute