
import './App.css';
import AllRoutes from './AllRoutes';

import Footer from "./component/layout/Footer/Footer"
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from 'react';
import {loadUser} from "./Redux/actions/userAction";
import Cookies from 'js-cookie';
import Header from './component/layout/Header/Header';
import UserOptions from "./component/layout/Header/UserOptions"
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(()=>{
    dispatch(loadUser());
 
   console.log(isAuthenticated)
  },[])
  return (
    <div className='App'>
     
    <Header/>
    <AllRoutes/>
  
   <Footer/>
    </div>
  );
}

export default App;
