import React from "react";
import Alarm from "./Alarm";
import Img from "./Img";

const Summation = () => {
  return (
    <div className="summation-container">
      <div className="summation-container-box">
        {/* 이미지 업로드 작업 연동 필요 */}
        <Img />
        {/* 프로젝트 수에 따른 표시 작업 필요 */}
        <Alarm />
      </div>
    </div>
  );
};

export default Summation;
