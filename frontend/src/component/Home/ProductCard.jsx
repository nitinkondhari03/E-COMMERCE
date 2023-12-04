import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <div id="productcards">
        <div
          id="productcardsimg"

        >
          <img id="images" src={product.images[0].url} alt={product.name} />
          {/* <img id="hoverimgs" src={product.images[1].url} alt={product.name} /> */}
        </div>
        <div id="productcardname">
          <p style={{ fontSize: "1vmax" }}>{product.name}</p>
        </div>
        <div id="productcardrating">
          <Rating {...options} />{" "}
          <span className="productCardSpan">
            {" "}
            ({product.numOfReviews} Reviews)
          </span>
        </div>
        <div id="productcardprice">
          <span>{`₹${product.price}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
