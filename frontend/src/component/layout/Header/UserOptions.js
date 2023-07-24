import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import {Backdrop} from "@mui/material";
import {MdDashboard} from "react-icons/md"
import {BsPersonCircle} from "react-icons/bs"
import {MdExitToApp} from "react-icons/md"
import {FaListAlt} from "react-icons/fa"
import {AiOutlineShoppingCart} from "react-icons/ai"

import { useNavigate } from "react-router-dom";

import { logout } from "../../../Redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const history = useNavigate();

  const dispatch = useDispatch();

  const options = [
    { icon: <FaListAlt />, name: "Orders", func: orders },
    { icon: <BsPersonCircle />, name: "Profile", func: account },
    {
      icon: (
        <AiOutlineShoppingCart
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <MdExitToApp />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <MdDashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    history("/admin/dashboard");
  }

  function orders() {
    history("/orders");
  }
  function account() {
    history("/account");
  }
  function cart() {
    history("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert("Logout Successfully");
  }

  return (
    <div style={{display:"flex"}}>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
     
    </div>
  );
};

export default UserOptions;
