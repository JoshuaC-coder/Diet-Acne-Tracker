import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { session } = UserAuth();

  if (!session) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;