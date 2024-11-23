import React from "react";
import { ReactComponent as Line } from "../../../assets/component/upload/fundline.svg";
import { ReactComponent as Pjtital } from "../../../assets/component/upload/upfive.svg";
import { ReactComponent as Pjday } from "../../../assets/component/upload/upsix.svg";
import { ReactComponent as Go } from "../../../assets/component/upload/gogo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Pjfund = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current path is "/fund"
  const isActive = location.pathname === "/fund";

  return (
    <div className={`pj-write-container ${isActive ? "active" : ""}`}>
      <div className="pj-write-left">
        <div className="pj-write-name">이름 연동 필요</div>
        <div className="pj-write-show-container">
          <div className="pj-write-graph">
            <Line />
          </div>
          <div className="pj-write-category">
            <Pjtital />
          </div>
          <div className="pj-write-title">
            <Pjday />
          </div>
        </div>
      </div>
      <div className="pj-write-right">
        <div className="pj-write-right-int-title">목표금액을 작성해주세요.</div>
        <div className="pj-write-fund-input">
          <input
            className="pj-fund-maintitle"
            placeholder="목표 금액을 입력해주세요."
          />
          <input
            className="pj-fund-subtitle"
            placeholder="달성 시 예상 수령 금액을 입력해주세요."
          />
        </div>
        <div className="pj-write-day-input">
          <div className="pj-day-maintitle-box">
            펀딩 시작일을 지정해주세요.
            <input className="pj-day-maintitle" placeholder="시작일 지정" />
          </div>
          <div className="pj-go">
            <Go />
          </div>
          <div className="pj-day-subtitle-box">
            펀딩 마감일을 지정해주세요.
            <input className="pj-day-subtitle" placeholder="마감일 지정" />
          </div>
        </div>

        <div className="pj-local-next-btn" onClick={() => navigate("/plan")}>
          저장하기
        </div>
      </div>
    </div>
  );
};

export default Pjfund;