import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_b.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer_wrap">
        <div className="logo_area">
          <Link to="/">
            <img src={Logo} alt="TOURinSouthKoreaNow" />
          </Link>
        </div>
        <div className="copy">Copyright© 2024 KIM YUMEE</div>
      </div>
    </footer>
  );
};

export default Footer;
