import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_b.svg";
const Header = () => {
  //url 파라미터 가져오기
  const userId = localStorage.getItem("nameId");
  return (
    <header>
      <div className="logo_area">
        <Link to={"/"}>
          <img src={Logo} alt="디지털다꾸 나구나구 로고" />
        </Link>
      </div>

      <div className="manu_area">
        <Link to={"/"}>홈</Link>
        <Link to={`/new/${userId}`}>다이어리 꾸미기</Link>
      </div>
    </header>
  );
};

export default Header;
