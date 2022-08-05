import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  //   return currentUser ? (
  //     <Route {...rest}>{(props) => <Component {...props} />}</Route>
  //   ) : (
  //     <Navigate to="/login" />
  //   );
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
