import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
//components
import Header from "../components/Header";
import Sticker from "../components/Sticker";
import Input from "../components/Input";
import Button from "../components/Button";

const New = () => {
  const [editVisible, setEditVisible] = useState(false);

  const captureArea = useRef();
  //html2canvas
  const onCapture = () => {
    html2canvas(captureArea.current).then((canvas) => {
      onSaveAs(canvas.toDataURL("./assets"), "image-download.png");
    });
  };
  const onSaveAs = (uri, filename) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  //글자 추가하기
  const handleEditClick = () => {
    setEditVisible(true);
  };

  return (
    <>
      <Header />
      <main className="new_diary_area">
        {editVisible ? (
          <h2>글 생성 후 드래그해서 꾸민 후 다이어리 다운로드를 눌러주세요</h2>
        ) : (
          <h2>초록 영역으로 스티커를 옮겨 꾸민 후 글자추가를 눌러주세요</h2>
        )}

        <div className="btn_group">
          <Button
            text={"다이어리 다운로드"}
            type={"default"}
            onClick={onCapture}
          />
          <Button
            text={"Next. 글자 추가하기"}
            type={"default"}
            onClick={handleEditClick}
          />
        </div>
        <div className="edit_area">
          <div className="captured_area" ref={captureArea}>
            <div className="sticker_area">
              <Sticker />
              {editVisible ? <Input /> : null}
            </div>
          </div>
        </div>
      </main>
      {/* {modal == true ? <Modal /> : null} */}
    </>
  );
};

export default New;
