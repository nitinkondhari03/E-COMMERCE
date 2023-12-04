import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>

        <p>Designed and Developed by Nitin Kondhari © Copyright 2023. All rights reserved.</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a target="blank" href="https://nitinkondhari03.github.io/" >Portfolio{" "}<IoPerson/></a>
        <a  target="blank"  href="https://github.com/nitinkondhari03">Github{" "}<FaGithub/></a>
        <a  target="blank"  href="https://www.linkedin.com/in/nitinkondhari/">LInkedin{" "}<FaLinkedin/></a>
      </div>
    </footer>
  );
};

export default Footer;
