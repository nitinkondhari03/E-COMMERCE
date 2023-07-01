import "./App.css";
import { useEffect} from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);

  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
