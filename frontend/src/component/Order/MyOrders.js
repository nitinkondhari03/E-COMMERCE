import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../Redux/actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";
import MetaData from "../layout/MetaData";
import { AiFillEye } from "react-icons/ai";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

const MyOrders = () => {
  const dispatch = useDispatch();

  const history = useNavigate();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);
  const handledeltaile = (el) => {
    console.log(el);
    history(`/order/${el}`);
  };
  console.log(orders);
  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          {orders &&
            orders.map((el) => (
              <Card
                direction={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xl: "row",
                  "2xl": "row",
                }}
                borderBottom={"2px solid black"}
                margin={"auto"}
                // overflow='hidden'
                w={"90%"}
                height={"350px"}
                marginBottom={"15px"}
              >
                <Box
                  width={{
                    base: "40%",
                    sm: "40%",
                    md: "50%",
                    lg: "40%",
                    xl: "40%",
                    "2xl": "40%",
                  }}
                  h={"100%"}
                >
                  <Image
                    w={"100%"}
                    h={"90%"}
                    src={el.orderItems[0].image}
                    alt="Caffe Latte"
                  />
                </Box>

                <Box
                  w={{
                    base: "60%",
                    sm: "60%",
                    md: "50%",
                    lg: "60%",
                    xl: "60%",
                    "2xl": "60%",
                  }}
                >
                  <Box h="330px" overflow={"hidden"}>
                    <p
                      fontSize={{
                        base: "5px",
                        sm: "5px",
                        md: "5px",
                        lg: "10px",
                        xl: "10px",
                        "2xl": "10px",
                      }}
                      size="sm"
                      fontWeight={"bold"}
                    >
                      {el.orderItems[0].name}
                    </p>

                    <p
                      className={
                        el.paymentInfo && el.paymentInfo.status === "succeeded"
                          ? "greenColor"
                          : "redColor"
                      }
                    >
                      Payment:
                      {el.paymentInfo && el.paymentInfo.status === "succeeded"
                        ? "PAID"
                        : "NOT PAID"}
                    </p>
                    <p>Amount: {el.totalPrice && el.totalPrice}</p>
                    <p // className={
                    //   el.orderStatus && el.orderStatus === "Delivered"
                    //     ? "greenColor"
                    //     : "redColor"
                    // }
                    >
                      Order Status:
                      {el.orderStatus && el.orderStatus}
                    </p>
                    <p>
                      <Button
                        margin={"auto"}
                        variant="solid"
                        onClick={() => handledeltaile(el._id)}
                        fontSize={"20px"}
                        borderRadius={"30px"}
                        padding={"5px 10px"}
                        color={"white"}
                        backgroundColor={"tomato"}
                        _hover={{ backgroundColor: "red" }}
                      >
                        Order Details
                      </Button>
                    </p>
                  </Box>
                </Box>
              </Card>
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
