import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@mui/material";
import {MdLocalShipping} from "react-icons/md"
import {MdLibraryAddCheck} from "react-icons/md"
import {MdAccountBalance} from "react-icons/md"
import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <h2><MdLocalShipping /></h2>,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <h2><MdLibraryAddCheck /></h2>,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <h2><MdAccountBalance /></h2>,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <div style={{backgroundColor:"white",width:"95%",margin:"auto",marginTop:"20px"}}>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CheckoutSteps;
