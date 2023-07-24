import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@mui/material";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./payment.css";
import {AiFillCreditCard} from "react-icons/ai"
import {BsFillCalendarEventFill} from "react-icons/bs"
import {MdVpnKey} from "react-icons/md"

import { createOrder, clearErrors } from "../../Redux/actions/orderAction";
import {addItemsToCart} from "../../Redux/actions/cartAction"
import {useNavigate} from "react-router-dom"
const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
const history=useNavigate()
  const dispatch = useDispatch();
 
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

 
  let x = localStorage.getItem("token");
  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const { data } = await axios.post(
        "https://pink-helpful-lamb.cyclic.app/api/v1/payment/process",
        {amount: Math.round(orderInfo.totalPrice * 100)}
        ,{
        headers: {
          'Authorization' : `${x}`
        }
      }
      );
     

      const client_secret = data.client_secret;
     
      SucceOrder(client_secret)

      // const result = await stripe.confirmCardPayment(client_secret, {
      //   payment_method: {
      //     card: elements.getElement(CardNumberElement),
      //     billing_details: {
      //       name: user.name,
      //       email: user.email,
      //       address: {
      //         line1: shippingInfo.address,
      //         city: shippingInfo.city,
      //         state: shippingInfo.state,
      //         postal_code: shippingInfo.pinCode,
      //         country: shippingInfo.country,
      //       },
      //     },
      //   },
      // });

      // if (result.error) {
      //   payBtn.current.disabled = false;

      //   alert(result.error.message);
     
      // } else {
      //   if (result.paymentIntent.status === "succeeded") {
      //     order.paymentInfo = {
      //       id: result.paymentIntent.id,
      //       status: result.paymentIntent.status,
      //     };

      //     dispatch(createOrder(order));
          
      //     history("/success");
      //   } else {
      //     alert("There's some issue while processing payment ");
      //   }
      // }
    } catch (error) {
      
      payBtn.current.disabled = false;
      alert("error.response.data.message");
     
    }
  };

  const SucceOrder=(ids)=>{
     let obj={
      shippingInfo,
      orderItems: cartItems,
      itemsPrice: orderInfo.subtotal,
      taxPrice: orderInfo.tax,
      shippingPrice: orderInfo.shippingCharges,
      totalPrice: orderInfo.totalPrice,
      paymentInfo: {
        id:ids,
       status:"succeeded"
      }
   }
   dispatch(createOrder(obj)); 
      history("/success");
  }
  

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
      
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <AiFillCreditCard />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <BsFillCalendarEventFill />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <MdVpnKey />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
