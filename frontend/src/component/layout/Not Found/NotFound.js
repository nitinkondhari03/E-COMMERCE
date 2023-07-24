import React from "react";

import {BiSolidErrorAlt} from "react-icons/bi"
import "./NotFound.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <BiSolidErrorAlt />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
