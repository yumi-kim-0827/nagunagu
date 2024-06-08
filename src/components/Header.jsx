import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_b.svg";
import { getSubjectId } from "../data/api";

const Header = () => {
  //url 파라미터 가져오기
  const userId = localStorage.getItem("nameId");
  const [name, setName] = useState("");

  const handleGetId = async () => {
    try {
      const response = await getSubjectId(userId);
      setName(response.name);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetId();
  }, []);

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
      <p>{name}님의 다이어리입니다.</p>
    </header>
  );
};

export default Header;
