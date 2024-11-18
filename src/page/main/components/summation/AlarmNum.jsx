import React from "react";

const AlarmNum = ({ title, num }) => {
  return (
    <div className="summation-today-projects">
      <div className="summation-title">{title}</div>
      <div className="summation-num-container">
        {/* 숫자 연결 필요 */}
        <div className="summation-num">{num}</div>
        <div className="summation-unit">개</div>
      </div>
    </div>
  );
};

export default AlarmNum;
