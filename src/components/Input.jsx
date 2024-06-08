import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postInput, getInput } from "../data/api";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
//components
import Button from "./Button";

gsap.registerPlugin(Draggable);

const Input = () => {
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);
  //url 파라미터 가져오기
  let { param } = useParams(); //param SUBJECT ID

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleInputClick = () => {
    postInputClick();
    getInputList();
    setInput(""); // 입력폼 초기화
  };
  // INPUT  포스트
  const postInputClick = async () => {
    try {
      const response = await postInput({ input, param });
      console.log(response);
      getInputList();
    } catch (error) {
      console.log("포스트에러");
    }
  };
  // INPUT  리스트 조회
  const getInputList = async () => {
    try {
      const data = await getInput(param);
      setInputList(data.results.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInputList();
  }, []);

  //GSAP 드래그
  useEffect(() => {
    Draggable.create(".input_item", {
      bound: ".edit_area",
    });
  }, [inputList]);

  return (
    <div className="input_area">
      <div className="input_notice">
        <p>
          추가된 텍스트 박스를 드래그! 원하는 위치에 놓아주세요. <br />
          5개까지 생성가능해요.
        </p>
      </div>
      <div className="input_text">
        <textarea
          type="text"
          value={input}
          placeholder="오늘 기분 어때요?"
          onChange={handleInputChange}
          disabled={inputList.length > 4}
        />
        <Button
          text={"추가"}
          type={"primary"}
          onClick={handleInputClick}
          disable={inputList.length === 5 ? true : false}
        />
      </div>

      <div className="input_list">
        {inputList?.slice(0, 5).map((item) => {
          return <div className="input_item">{item.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Input;
