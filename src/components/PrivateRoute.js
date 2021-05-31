import React from "react";
import { Route, Redirect, Router } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...restProps }) => {
  const user = null;
  return (
    <Route
      {...restProps}
      render={(props) => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};

// PRIVATE ROUTE MANAGE WHICH ROUTE WILL THROUGH IS, IF USER IS TRUE WILL BE IN PRIVATE, OTHERWISE WILL BE IN PUBLIC

export default PrivateRoute;
