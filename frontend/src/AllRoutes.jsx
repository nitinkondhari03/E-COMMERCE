import {Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home"
import Products from "./component/Product/Products"
import ProductDetails from "./component/Product/ProductDetails";
import LoginSignUp from "./component/User/LoginSignUp"
import About from "./component/layout/About/About"
import Contact from "./component/layout/Contact/Contact"
import NotFound from "./component/layout/Not Found/NotFound"
import Cart from "./component/Cart/Cart"
import Profile from "./component/User/Profile"
import UpdateProfile from "./component/User/UpdateProfile"
import ForgotPassword from "./component/User/ForgotPassword"
import ResetPassword from "./component/User/ResetPassword"
import Shipping from "./component/Cart/Shipping";
import OrderSuccess from "./component/Cart/OrderSuccess"
import MyOrders from "./component/Order/MyOrders";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import OrderDetails from "./component/Order/OrderDetails";
import PaymentElements from "./component/Cart/PaymentElements.js";
import Protected from "./component/Route/ProtectedRoute"
import UpdatePassword from "./component/User/UpdatePassword";


import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
 import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
 import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
 import ProductReviews from "./component/Admin/ProductReviews";


 import ProtectedAdmin from "./component/Route/ProtectedRouteAdmin"
import ProductsSearch from "./component/Product/ProductsSearch.jsx";
const AllRoutes=()=>{
      return(
            <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/products" element={<Products/>}></Route>
                  <Route path="/products/:keywords" element={<Products/>} />
                  <Route path="/products/search/:keywords" element={<ProductsSearch/>} />
                  <Route path="/product/:id" element={<ProductDetails/>}></Route>
                  <Route path="/login" element={<LoginSignUp/>}></Route>
                  <Route path="/about" element={<About/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
                  <Route path="/cart" element={<Cart/>}></Route>
                  <Route path="/account" element={<Protected><Profile/></Protected>}></Route>
                  <Route path="/me/update" element={<Protected><UpdateProfile/></Protected>}></Route>
                  <Route path="/password/forgot" element={<ForgotPassword/>}></Route>
                  <Route path="/password/reset/:token" element={<ResetPassword/>}></Route>
                  <Route path="/shipping" element={<Protected><Shipping/></Protected>}></Route>
                  <Route path="/success" element={<Protected><OrderSuccess/></Protected>}></Route>
                  <Route path="/orders" element={<Protected><MyOrders/></Protected>}></Route>
                  <Route path="/order/confirm" element={<Protected><ConfirmOrder/></Protected>}></Route>
                  <Route path="/order/:id" element={<Protected><OrderDetails/></Protected>}></Route>
                  <Route path="/password/update" element={<Protected><UpdatePassword/></Protected>}></Route>
                  <Route path="/process/payment" element={<Protected><PaymentElements/></Protected>}></Route>
                  
                  

                  {/* Admin */}
                  <Route path="/admin/dashboard" element={<ProtectedAdmin><Dashboard/></ProtectedAdmin>}></Route>
                  <Route path="/admin/products" element={<ProtectedAdmin><ProductList/></ProtectedAdmin>}></Route>
                  <Route path="/admin/product" element={<ProtectedAdmin><NewProduct/></ProtectedAdmin>}></Route>
                  <Route path="/admin/product/:id" element={<ProtectedAdmin><UpdateProduct/></ProtectedAdmin>}></Route>
                  <Route path="/admin/orders" element={<ProtectedAdmin><OrderList/></ProtectedAdmin>}></Route>
                  <Route path="/admin/order/:id" element={<ProtectedAdmin><ProcessOrder/></ProtectedAdmin>}></Route>
                  <Route path="/admin/users" element={<ProtectedAdmin><UsersList/></ProtectedAdmin>}></Route>
                  <Route path="/admin/user/:id" element={<ProtectedAdmin><UpdateUser/></ProtectedAdmin>}></Route>
                  <Route path="/admin/reviews" element={<ProtectedAdmin><ProductReviews/></ProtectedAdmin>}></Route>


                  
                  <Route path="*" element={<NotFound/>}></Route>
                  
            </Routes>
      )
}


export default AllRoutes