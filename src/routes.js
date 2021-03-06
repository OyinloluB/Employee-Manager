import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);
