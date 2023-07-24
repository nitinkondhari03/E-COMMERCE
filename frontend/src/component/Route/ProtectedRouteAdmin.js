import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {Navigate, useLocation} from "react-router-dom"
const ProtectedAdmin = ({children}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
let location = useLocation();
console.log(user)
console.log(isAuthenticated)
  if(!isAuthenticated || user.role=="user"){
    return <Navigate to="/login" state={{ from: location}} replace />
  }   
return children
};

export default ProtectedAdmin;
