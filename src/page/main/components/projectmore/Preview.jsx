import React from "react";

const Preview = ({
  title,
  image,
  category,
  region,
  progressPeriod,
  progressRate,
  achievedAmount,
  onClick,
}) => {
  return (
    <div className="preview-container" onClick={onClick}>
      {/* 이미지 URL을 <img> 태그로 표시 */}
      <div className="preview-img-container">
        <div className="preview-img-region">{region}</div>
        <img src={image} alt={title} className="preview-img" />
      </div>
      <div className="preview-content-container">
        <div className="preview-content-title-container">
          <div className="preview-content-title">
            {title}

            <div className="preview-content-day">{progressPeriod}</div>
          </div>
          <div className="preview-content-icon">{category}</div>
        </div>
        {/* 진행상황 연동 필요 */}
        <div className="preivew-graph"> 그래프 연동 필요</div>
        <div className="preview-content-load">
          <div className="preview-progressRate">{progressRate}</div>
          <div className="preview-achievedAmount">{achievedAmount}원 달성</div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
