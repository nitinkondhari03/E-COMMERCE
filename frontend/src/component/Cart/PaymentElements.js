import { useEffect } from "react";
import Payment from "./Payment"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import axios from "axios";
const PaymentElement=()=>{

      const [stripeApiKey, setStripeApiKey] = useState("");
      
let x = localStorage.getItem("token");
  async function getStripeApiKey() {
      const {data} = await axios.get("https://pink-helpful-lamb.cyclic.app/api/v1/stripeapikey",{
            headers:{
              "Authorization":`${x}`
            }
          });
  
      setStripeApiKey(data.stripeApiKey);
      console.log(data.stripeApiKey)
    }
useEffect(()=>{
     
      getStripeApiKey();
},[])

      return(
            <>
              {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Payment/>
        </Elements>
      )}
            </>
      )
}

export default PaymentElement