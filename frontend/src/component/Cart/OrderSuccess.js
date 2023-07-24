import React from "react";

import {BiSolidCheckCircle} from "react-icons/bi"
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../Redux/actions/cartAction";
const OrderSuccess = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  cartItems.forEach((item) => {
      console.log(item.product)
      dispatch(removeItemsFromCart(item.product));
    })
  return (
    <div className="orderSuccess">
      <BiSolidCheckCircle />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
