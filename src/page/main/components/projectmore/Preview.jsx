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
  const handleClick = () => {
    // 클릭 시 이미지 정보를 localStorage에 저장
    const recentImages = JSON.parse(localStorage.getItem("recentImages")) || [];
    if (!recentImages.includes(image)) {
      recentImages.unshift(image); // 새로 클릭된 이미지를 맨 앞에 추가
      if (recentImages.length > 3) {
        recentImages.pop(); // 최대 3개까지만 저장
      }
      localStorage.setItem("recentImages", JSON.stringify(recentImages)); // localStorage에 저장
    }

    onClick(); // 부모 컴포넌트의 onClick 호출
  };

  return (
    <div className="preview-container" onClick={handleClick}>
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

        <div className="profile-progress">
          <div
            className="profile-progress-gauge"
            style={{ width: `${progressRate}%` }}
          ></div>
        </div>
        <div className="preview-content-load">
          <div className="preview-progressRate">{progressRate}</div>
          <div className="preview-achievedAmount">{achievedAmount}원 달성</div>
        </div>
      </div>
    </div>
  );
};
export default Preview;
