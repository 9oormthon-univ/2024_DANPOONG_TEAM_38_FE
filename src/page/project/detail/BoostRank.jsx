import React from "react";

import { ReactComponent as Line } from "../../../assets/component/line.svg";

// 후원 순위 api 대신
const ranks = [
  { id: 1, name: "test1", won: "2,900,000원" },
  { id: 2, name: "test2", won: "900,000원" },
  { id: 3, name: "test3", won: "500,000원" },
];

const BoostRank = () => {
  return (
    <div className="pj-detail-boost-ranking-container">
      {/* 후원 순위 api 연동 필요 */}
      {ranks.map((rank) => (
        <div className="pj-detail-boost-rank-container">
          <div className="pj-detail-boost-rank-num">{rank.id}위</div>
          <div className="pj-detail-boost-rank-img"></div>
          <div className="pj-detail-boost-rank-content">
            <div className="pj-detail-boost-rank-name">{rank.name}</div>
            <div className="pj-detail-boost-rank-won-box">
              <div className="pj-detail-boost-rank-won">{rank.won}</div>
              &nbsp;후원
            </div>
          </div>
        </div>
      ))}
      <div className="pj-line"></div>
      <div className="pj-detail-boost-rank-Amount-won-box">
        {/* 모인 금액, 남은 기간,퍼센트, 후원자 api 연동 필요 */}
        <div className="pj-detail-boost-rank-Amount-won-title"> 모인 금액</div>
        <div className="pj-detail-boost-rank-Amount-won-content">
          <div className="pj-detail-boost-rank-Amount-won-content-num">
            <div className="pj-detail-boost-rank-Amount-won-content-num-won">
              000000000{" "}
              <div className="pj-detail-boost-rank-Amount-won-content-num-won-unit">
                {" "}
                원
              </div>
            </div>

            <div className="pj-detail-boost-rank-Amount-won-content-percent">
              130%달성
            </div>
          </div>
        </div>
      </div>
      {/* 남은 기간 api 연동 필요 */}
      <div className="pj-detail-boost-rank-period-box">
        <div className="pj-detail-boost-rank-period-title">남은 기간</div>
        <div className="pj-detail-boost-rank-period-content">
          15
          <div className="pj-detail-boost-rank-period-content-day"> 일</div>
        </div>
      </div>
      {/* 후원자 수 api 연동 필요 */}
      <div className="pj-detail-boost-rank-period-box">
        <div className="pj-detail-boost-rank-period-title">후원자</div>
        <div className="pj-detail-boost-rank-period-content">
          315
          <div className="pj-detail-boost-rank-period-content-day"> 명</div>
        </div>
      </div>
    </div>
  );
};

export default BoostRank;
