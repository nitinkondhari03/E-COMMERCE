import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import UserOptions from "./UserOptions"
import {BsPersonCircle} from "react-icons/bs"
import { Link } from "react-router-dom";
import "./Header.css";
import Search from "../../Product/Search"
import AccountMenu from "./Drower"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from "react-router-dom";
import Categorys from "./Categorys";
import clickshop from "../../../images/Ecommerce.png"
const Header = () => {
  const navigates=useNavigate()
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const Carts=()=>{
    navigates("/cart")
  }
  const Logins=()=>{
    navigates("/login")
  }
  const Home=()=>{
    navigates("/")
  }
  return (
    <div>
    <div className="nav">
      <div className="nav1">
        <div className="Logoimg">
        <img onClick={Home}  src={clickshop} alt="Logo"/>
        </div>
        <div className="search">
         <Search/>
        </div>
        <div onClick={Carts} className="cartsig" style={{display:'flex'}}>
        <h2 ><AiOutlineShoppingCart/><p className="ptages">{cartItems.length}</p></h2>
        <h4 style={{color:"black"}}>Cart</h4>
        </div>
        <div className="signin"style={{display:'flex'}}>
          {isAuthenticated ? (<AccountMenu />):<h2><BsPersonCircle onClick={Logins}/></h2>}

           {!isAuthenticated && <h4 style={{color:"black"}}  onClick={Logins}>Login</h4>}
           
          
        </div>
      </div>
      <div className="search1">
      <Search/>
      </div>
    </div>
    </div>
  );
};

export default Header;
