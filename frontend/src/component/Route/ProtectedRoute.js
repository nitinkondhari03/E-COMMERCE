import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {Navigate, useLocation} from "react-router-dom"
const Protected = ({children}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
let location = useLocation();

if(!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location}} replace />
}
return children
  
  
 

};

export default Protected;
