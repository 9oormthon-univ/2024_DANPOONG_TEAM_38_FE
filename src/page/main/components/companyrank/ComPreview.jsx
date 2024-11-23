import React, { useEffect, useState } from "react";
import { ReactComponent as Next } from "../../../../assets/component/BigNext.svg";
import { ReactComponent as ActiveNext } from "../../../../assets/component/AtBigNext.svg";
import { ReactComponent as Back } from "../../../../assets/component/BigBack.svg";
import { ReactComponent as ActiveBack } from "../../../../assets/component/AtBigBack.svg";
import { ReactComponent as Title } from "../../../../assets/component/upload/ranktitle.svg";

import GetComRanking from "../../../../apis/project/GetComRanking";

const menu = [
  { name: "주간", sortType: "weekly" },
  { name: "월간", sortType: "monthly" },
  { name: "전체", sortType: "allTime" },
  { name: "프로젝트 수", sortType: "projects" },
];

const ComPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
  const [isNextActive, setIsNextActive] = useState(false); // ActiveNext 렌더링 상태
  const [isBackActive, setIsBackActive] = useState(false); // ActiveBack 렌더링 상태
  const [activeMenu, setActiveMenu] = useState(menu[0].sortType); // 현재 선택된 메뉴
  const [rankData, setRankData] = useState([]); // 현재 표시할 기업 데이터
  const [clickedIndex, setClickedIndex] = useState(null); // 클릭 상태 저장
  const imagesPerPage = 3; // 한 번에 보여줄 이미지 수

  // API 호출 함수
  const fetchComRanking = async (sortType) => {
    try {
      const response = await GetComRanking(sortType);
      setRankData(response.result); // API 결과를 저장
      setCurrentIndex(0); // 슬라이드 인덱스 초기화
    } catch (error) {
      console.error("연동 실패", error);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchComRanking(activeMenu); // 초기에는 "주간" 데이터 로드
  }, [activeMenu]);

  // 다음 버튼 핸들러
  const handleNext = () => {
    if (currentIndex < rankData.length - imagesPerPage) {
      setCurrentIndex(currentIndex + imagesPerPage);
      setIsNextActive(true);
      setIsBackActive(false);
    }
  };

  // 이전 버튼 핸들러
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
      setIsBackActive(true);
      setIsNextActive(false);
    }
  };

  // 로딩 상태 처리
  if (!rankData || rankData.length === 0) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div className="rank-preview-container">
      {/* 메뉴 탭 */}
      <div className="rank-preview-menu-container">
        {menu.map((item) => (
          <div
            key={item.name}
            className={`rank-preview-menus ${
              activeMenu === item.sortType ? "active" : item.sortType
            }`}
            onClick={() => setActiveMenu(item.sortType)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* 기업 이미지 슬라이드 */}
      <div className="rank-compant-img">
        {rankData
          .sort((a, b) => b.contributionAmount - a.contributionAmount) // 기여금을 기준으로 내림차순 정렬
          .slice(currentIndex, currentIndex + imagesPerPage) // 현재 페이지의 데이터 슬라이싱
          .map((company, index) => {
            const isClicked = clickedIndex === index; // 클릭된 상태인지 확인
            return (
              <div
                key={company.id}
                className="rank-preview-img-container"
                style={{
                  backgroundImage: `url(${company.image})`,
                  backgroundColor: isClicked ? "#000000" : "transparent",
                }}
                onClick={() => setClickedIndex(isClicked ? null : index)} // 클릭 상태 토글
              >
                {isClicked ? (
                  <div className="rank-preview-info-click">
                    <div className="rank-preview-info-rank">
                      주간 &nbsp;{index + 1} 위
                    </div>{" "}
                    {/* 순위 */}
                    <div className="rank-preview-info-category">
                      {company.category}
                    </div>
                    <div className="rank-preview-info-name">
                      {company.name}
                    </div>
                    <div className="rank-preview-info-amount">
                      {company.contributionAmount.toLocaleString()}원
                    </div>
                  </div>
                ) : (
                  <div className="rank-preview-info">
                    <Title />
                    <div className="rank-preview-img-name">
                      {company.name}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {/* 슬라이드 버튼 */}
      <div className="rank-preview-next-btn">
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

export default ComPreview;
