import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../Redux/actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import { Slider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import MetaData from "../layout/MetaData";
import Categorys from "../layout/Header/Categorys";
const categories = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Mobile Cover",
  "Tablet",
  "TV",
];

const Products = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  let { keywords } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100000]);
  const [category, setCategory] = useState("");
  const [price1, setprice1] = useState(0);
  const [price2, setprice2] = useState(100000);
  const [ratings, setRatings] = useState(0);
  const [displayblock, setdisplayblock] = useState(false);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = keywords;
console.log(keyword)
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event) => {
    setPrice([price1 || 0, price2 || 100000]);
  };
  let count = filteredProductsCount;
  const handleckick = (x) => {
    history(`/products/${x}`);
  };
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Categorys />

          <div style={{ backgroundColor: "white" }}>
            <MetaData title="PRODUCTS -- ECOMMERCE" />
            <h2 className="productsHeading">Products</h2>

            <div className="divflex">
              <div className="Filterss">
                <div>
                  <div id="pricesh4">
                    <h4>Price Fliter</h4>
                  </div>
                  <div className="filterprices">
                    <input
                      value={price1}
                      onChange={(e) => setprice1(e.target.value)}
                      placeholder="Min"
                    />
                    <input
                      value={price2}
                      onChange={(e) => setprice2(e.target.value)}
                      placeholder="Max"
                    />
                    <button onClick={priceHandler}>Go</button>
                  </div>
                </div>
                <div id="ratingh4">
                  <h4>Ratings Above</h4>
                  <Slider
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating);
                    }}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={5}
                  />
                </div>
              </div>

              <div className="products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </div>

            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Products;
