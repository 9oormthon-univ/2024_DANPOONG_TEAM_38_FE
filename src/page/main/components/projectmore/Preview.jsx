import React from "react";

const Preview = ({ title, name, place, onClick }) => {
  return (
    // 프로젝트 preview api 연동후 수정 필요 list에서 넘어온 경우 달성 퍼센트랑 마감 날짜 필요
    <div className="preview-container" onClick={onClick}>
      {/* 이미지 연동 필요 */}
      <div className="preview-img"></div>
      <div className="preview-content-container">
        <div className="preview-content-title">
          {title}

          {/* 날짜 연동 필요 */}
          <div className="preview-content-day">2024.11.06-2024.11.24</div>
        </div>
        <div className="preview-content-icon"></div>

        {/* 진행상황 연동 필요 */}
        <div className="preview-content-load"></div>
      </div>
    </div>
  );
};

export default Preview;
