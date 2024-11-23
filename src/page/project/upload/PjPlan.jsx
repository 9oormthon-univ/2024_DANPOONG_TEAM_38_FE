import React from "react";
import { ReactComponent as Up8 } from "../../../assets/component/upload/up8.svg";
import { ReactComponent as Up9 } from "../../../assets/component/upload/up9.svg";
import { ReactComponent as Up10 } from "../../../assets/component/upload/up10.svg";
import { ReactComponent as Up7 } from "../../../assets/component/upload/up7.svg";
import { ReactComponent as Line } from "../../../assets/component/upload/lines.svg";
import { useNavigate } from "react-router-dom";
import PjIntroduce from "./PjIntroduce";

const PjPlan = () => {
  const navigate = useNavigate();

  return (
    <div className="pj-write-container">
      <div className="pj-write-left">
        <div className="pj-write-name">이름 연동 필요</div>
        <div className="pj-write-show-container">
          <div className="pj-write-graph">
            <Line />
          </div>
          <div className="pj-plan-category">
            <Up7 />
          </div>
          <div className="pj-plan-title">
            <Up8 />
          </div>
          <div className="pj-plan-summary">
            <Up9 />
          </div>
          <div className="pj-plan-img">
            <Up10 />
          </div>
        </div>
      </div>
      <div className="pj-write-right">
        <PjIntroduce />
        <div className="pj-write-day-input">
          <div className="pj-day-maintitle-box">
            예산 사용처 분야
            <input
              className="pj-day-maintitle"
              placeholder="사용처를 적어주세요."
            />
          </div>
          <div className="pj-go"> </div>

          <div className="pj-day-subtitle-box">
            사용 예산 금액
            <input
              className="pj-day-subtitle"
              placeholder="금액을 적어주세요."
            />
          </div>
        </div>
        <div className="pj-write-days-input">
          <div className="pj-day-maintitles-box">
            <input
              className="pj-day-maintitles"
              placeholder="날짜를 선택해주세요"
            />
          </div>

          <div className="pj-day-subtitles-box">
            <input
              className="pj-day-subtitles"
              placeholder="일정을 적어주세요."
            />
          </div>
        </div>
        <div className="pj-team">
          <PjIntroduce />
        </div>

        <div
          className="pj-local-next-btn"
          onClick={() => navigate("/createuser")}
        >
          {" "}
          저장하기
        </div>
      </div>
    </div>
  );
};

export default PjPlan;
