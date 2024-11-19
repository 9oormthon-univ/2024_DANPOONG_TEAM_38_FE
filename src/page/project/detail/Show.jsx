import React, { useState } from "react";

import { ReactComponent as Left } from "../../../assets/component/project/left.svg";
import { ReactComponent as Right } from "../../../assets/component/project/right.svg";

const Show = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스

  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6",
  ];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="pj-detail-show-container">
      <div className="pj-detail-show-title">테스트</div>
      <div className="pj-detail-show-img-slice">
        {/* 왼쪽 버튼 */}
        <Left onClick={handleBack} className="pj-detail-show-left-btn" />
        {/* 현재 이미지를 표시 */}
        <div className="pj-detail-show-img-section">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="pj-detail-show-image"
          />
        </div>
        {/* 오른쪽 버튼 */}
        <Right onClick={handleNext} className="pj-detail-show-right-btn" />
      </div>
      <div className="pj-detail-show-sub-title">프로젝트 소제목</div>
    </div>
  );
};

export default Show;
