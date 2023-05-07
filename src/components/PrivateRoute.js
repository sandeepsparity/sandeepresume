import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuthenticated = localStorage.getItem("token"); 

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export { PrivateRoute };