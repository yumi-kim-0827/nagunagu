import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo_b.svg";
import { postName } from "../data/api";
//components
import LoginModal from "../components/LoginModal";
import Button from "../components/Button";

const Home = () => {
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    setModal(!modal);
  };

  const handleNameClick = async () => {
    setName("");
    try {
      const responses = await postName(name);
      const nameId = responses.data.id;
      localStorage.setItem("nameId", nameId);
      alert("로그인 되었어요.");
      navigate(`/new/${nameId}`);
    } catch (error) {
      alert("포스팅이 안되었어요.");
    }
  };

  return (
    <main className="main_area">
      <h1 className="main_logo">
        <img src={Logo} alt="디지털다꾸 나구나구 로고" />
      </h1>
      <div className="btn_group">
        <Button text={"로그인"} type={"primary"} onClick={handleModal} />
      </div>
      {modal ? (
        <LoginModal
          name={name}
          setName={setName}
          handleNameClick={handleNameClick}
          handleModal={handleModal}
        />
      ) : null}
    </main>
  );
};

export default Home;
