import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import jsonData from "./products.json";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../Redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import Slider from "./Slider.jsx";
import SliderUp from "./SliderUp";
import Categorys from "../layout/Header/Categorys";
import { FaLaptop } from "react-icons/fa";
const Home = () => {
   const dispatch = useDispatch();
   const { loading, error, products } = useSelector((state) => state.products);

   useEffect(() => {
      if (error) {
         alert(error);
         dispatch(clearErrors());
      }
      dispatch(getProduct());
   }, [dispatch, error, alert]);
   const sliderImageUrl = jsonData.Mobile
   const Laptop = jsonData.Laptop
   const headphones = jsonData.Headphones
   const Mobile_Cover = jsonData.MobileCover
   const Tablet = jsonData.Tablet
   const TV = jsonData.TV

   return (
      <Fragment>
         {loading ? (
            <Loader />
         ) : (
            <div>
               
               <Categorys />
               <SliderUp />
               <div className="parent">
                  <h1 style={{ fontSize: "2.4vmax" }}>Laptop</h1>
                  <Slider sliderImageUrl={Laptop} />
               </div>
               <div className="parent">
                  <h1 style={{ marginLeft: "50px", fontSize: "2.4vmax" }}>Headphones</h1>
                  <Slider sliderImageUrl={headphones} />
               </div>
               <div className="parent">
                  <h1 style={{ marginLeft: "50px", fontSize: "2.4vmax" }}>Mobile</h1>
                  <Slider sliderImageUrl={sliderImageUrl} />
               </div>
               <div className="parent">
                  <h1 style={{ marginLeft: "50px", fontSize: "2.4vmax" }}>Mobile Cover</h1>
                  <Slider sliderImageUrl={Mobile_Cover} />
               </div>
               <div className="parent">
                  <h1 style={{ marginLeft: "50px", fontSize: "2.4vmax" }}>Tablet</h1>
                  <Slider sliderImageUrl={Tablet} />
               </div>
               <div className="parent">
                  <h1 style={{ marginLeft: "50px", fontSize: "2.4vmax" }}>TV</h1>
                  <Slider sliderImageUrl={TV} />
               </div>
            </div>
         )}
      </Fragment>
   );
};

export default Home;
