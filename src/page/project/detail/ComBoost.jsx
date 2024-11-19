import React from "react";
import { useNavigate } from "react-router-dom";
import BoostRank from "./BoostRank";

const ComBoost = () => {
  const navigate = useNavigate();
  return (
    <div className="pj-detail-boost-container">
      <div className="pj-detail-boost-banner">
        🔥현재&nbsp;
        {/* 기업 수 api 연동 필요 */}
        <div className="pj-detail-boost-num"> 5개의 기업</div>이 함께 후원 중
      </div>
      {/* 후원하기 api 연동 필요 */}
      <div className="pj-detail-boost-main">
        <div className="pj-detail-boost-main-title-container">
          <div className="pj-detail-boost-main-title">
            <div className="pj-detail-boost-main-title-h1">후원 기업 순위</div>
            <div className="pj-detail-boost-main-title-sub">
              후원 금액이 많은 순서로 구성하였습니다.
            </div>
          </div>

          {/* 후원 기업 순위 전체보기 페이지 연동 필요 */}
          <div
            className="pj-detail-boost-main-see-all"
            onClick={() => navigate("/")}
          >
            전체보기
          </div>
        </div>
        {/* 기업 후원 순위 랭킹 api 필요 */}
        <BoostRank />
      </div>
    </div>
  );
};

export default ComBoost;
