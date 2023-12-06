import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import { clearErrors, getProduct } from "../../Redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect,useRef } from "react";
import "./Search.css";

const Search = () => {
  const navigets=useNavigate()
  const valueRef = useRef();
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100000]);
  const [category, setCategory] = useState("");
  const [price1, setprice1] = useState(0);
  const [price2, setprice2] = useState(100000);
  const [ratings, setRatings] = useState(0);
  const [data,setdata]=useState()
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
const history=useNavigate()
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    setdata("")
    if (keyword.trim()) {
      history(`/products/search/${keyword}`);
    } else {
      history("/products");
    }
  };
  useEffect(() => {
   if(keyword=="" || valueRef.current.value==""){
    setdata("")
   }else{
    dispatch(getProduct(valueRef.current.value, currentPage, price, category, ratings));
    setdata(products)
   }
  }, [keyword]);
  const handleproductid=(id)=>{
    setdata("")
    navigets(`/product/${id}`)
  }
  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          ref={valueRef}
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {!data || data.length==0?
      <div></div>:
      <div className="showproduct">
        <div className="showproductdata">
        {data && data.map((el)=>(
          <div className="searchprodcuts" key={el._id}>
            <div> <img  src={el.images[0].url} alt="IMG"/></div>
           <div><p onClick={()=>handleproductid(el._id)}>{el.name}</p></div>
          </div>
          
        ))}
        </div>
      </div>
      }
  
    </Fragment>
  );
};

export default Search;
