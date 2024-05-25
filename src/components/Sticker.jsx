import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
//imgaes import
import { getStickerImg } from "../util/get-emotion-image";

const Sticker = () => {
  //GSAP 드래그
  useEffect(() => {
    Draggable.create(".sticker", {
      bound: ".edit_area",
    });
  }, []);
  return (
    <>
      {/* <img
                src={getStickerImg(1)}
                style={{ transform: resetStyle }}
                className="sticker"
                alt="디지털다꾸나구나구"
              /> */}
      <img
        src={getStickerImg(1)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(2)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(3)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(4)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(5)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(6)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(7)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(8)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(9)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(10)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(11)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(12)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(13)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(14)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(15)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(16)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(17)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(18)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(19)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(20)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(21)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(22)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(23)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(24)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(25)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(26)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(27)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(28)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(29)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(30)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(31)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(32)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(33)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
      <img
        src={getStickerImg(34)}
        className="sticker"
        alt="디지털다꾸나구나구"
      />
    </>
  );
};

export default Sticker;
