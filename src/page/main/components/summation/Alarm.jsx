import React from "react";

import { ReactComponent as Line } from "../../../../assets/component/line.svg";
import { ReactComponent as AlarmIcon } from "../../../../assets/component/alarm.svg";
import { ReactComponent as More } from "../../../../assets/component/more.svg";

import AlarmNum from "./AlarmNum";

const Alarm = () => {
  return (
    <div className="summation-alarm-container">
      <div className="summation-projects-num-container">
        {/* 프로젝트 수 연동 필요 */}
        <AlarmNum title={"오늘 신규 프로젝트"} num={"72"} />
        <div className="summation-line">
          <Line />
        </div>
        <AlarmNum title={"누적 프로젝트"} num={"6,999"} />
      </div>
      <div className="summation-alarm-box">
        <div className="summation-alarm-heaer">
          <div className="summation-alarm-icon">
            <AlarmIcon />
          </div>
          알려드립니다
        </div>
        {/* 알림 내용 연동 필요 */}
        <div className="summation-alarm-content">
          <li className="summation-alarm-li">
            11월 신규 프로젝트 오픈 기간 안내
          </li>
          <div className="summation-alarm-li-day">2024.11.06 (수)</div>
        </div>

        {/* 알림 더보기 내용 연동 필요 */}
        <div className="summation-alarm-more">
          더보기
          <div className="summation-alarm-more-icon">
            <More />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alarm;
