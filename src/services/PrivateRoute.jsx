import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
            // if we have a current user then render the current component
          <RouteComponent {...routeProps} />
        ) : (
            // otherwise redirect to the LoginComponent
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute