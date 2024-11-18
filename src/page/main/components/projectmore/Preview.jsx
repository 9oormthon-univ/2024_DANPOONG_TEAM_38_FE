import React from "react";

const Preview = ({ title }) => {
  return (
    <div className="preview-container">
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
