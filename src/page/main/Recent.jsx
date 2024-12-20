import React, { useState } from "react";
import { ReactComponent as Next } from "../../assets/component/next.svg";
import { ReactComponent as ActiveNext } from "../../assets/component/ActiveNext.svg";
import { ReactComponent as Back } from "../../assets/component/goback.svg";
import { ReactComponent as ActiveBack } from "../../assets/component/Activegoback.svg";

const Recent = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
  const [isNextActive, setIsNextActive] = useState(false); // ActiveNext 렌더링 상태
  const [isBackActive, setIsBackActive] = useState(false); // ActiveBack 렌더링 상태

  // localStorage에서 최근 이미지를 불러오기
  const recentImages = JSON.parse(localStorage.getItem("recentImages")) || [];

  // 이미지 한 번에 3개씩 슬라이드
  const imagesPerPage = 3;

  const handleNext = () => {
    if (currentIndex < recentImages.length - imagesPerPage) {
      setCurrentIndex(currentIndex + imagesPerPage);
      setIsNextActive(true);
      setIsBackActive(false);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
      setIsBackActive(true);
      setIsNextActive(false);
    }
  };

  return (
    <div className="recent-project-container">
      <div className="recent-project-title">최근 본 프로젝트</div>
      <div className="recent-project-imgs">
        {/* 현재 인덱스부터 3개의 이미지를 슬라이드 */}
        {recentImages
          .slice(currentIndex, currentIndex + imagesPerPage)
          .map((src, index) => (
            <div
              key={index}
              className="recent-project-img"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          ))}
      </div>
      <div className="recent-project-btn">
        <div className="back-btn" onClick={handleBack}>
          {isBackActive ? <ActiveBack /> : <Back />}
        </div>

        <div className="next-btn" onClick={handleNext}>
          {isNextActive ? <ActiveNext /> : <Next />}
        </div>
      </div>
    </div>
  );
};

export default Recent;
