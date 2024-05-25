import React from "react";
//components
import Button from "./Button";

const LoginModal = ({ name, setName, handleNameClick, handleModal }) => {
  return (
    <div class="modal_area">
      <div className="modal_bg"></div>
      <div className="modal_box">
        <p>사용하실 이름을 입력해주세요.</p>
        <div className="modal_content">
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="modal_button">
          <Button text={"로그인"} type={"primary"} onClick={handleNameClick} />
          <Button text={"닫기"} type={"default"} onClick={handleModal} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
