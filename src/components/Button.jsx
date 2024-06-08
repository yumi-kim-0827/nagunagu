import React from "react";

const Button = ({ text, type, onClick, disable }) => {
  return (
    <button className={`btn_${type}`} onClick={onClick} disabled={disable}>
      {text}
    </button>
  );
};

export default Button;
