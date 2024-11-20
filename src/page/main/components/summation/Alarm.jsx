import React, { useEffect, useState } from "react";
import { ReactComponent as Line } from "../../../../assets/component/line.svg";
import { ReactComponent as AlarmIcon } from "../../../../assets/component/alarm.svg";
import { ReactComponent as More } from "../../../../assets/component/more.svg";

import AlarmNum from "./AlarmNum";
import GetCountProject from "../../../../apis/project/GetCountProject";

const Alarm = () => {
  const [newProjects, setNewProjects] = useState(null); // 신규 프로젝트 수 상태
  const [allProjects, setAllProjects] = useState(null); // 누적 프로젝트 수 상태

  // 프로젝트 수를 조회하는 함수
  const fetchProjectCounts = async () => {
    try {
      const allProjectsData = await GetCountProject("all"); // 누적 프로젝트 수 조회
      const newProjectsData = await GetCountProject("new"); // 신규 프로젝트 수 조회

      setAllProjects(allProjectsData.result); // 누적 프로젝트 수 설정
      setNewProjects(newProjectsData.result); // 신규 프로젝트 수 설정
    } catch (error) {
      console.error("프로젝트 수 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchProjectCounts(); // 컴포넌트 마운트 시 프로젝트 수를 조회
  }, []);

  return (
    <div className="summation-alarm-container">
      <div className="summation-projects-num-container">
        {/* 신규 프로젝트 수 연동 */}
        <AlarmNum
          title={"오늘 신규 프로젝트"}
          num={newProjects !== null ? newProjects : "0"}
        />
        <div className="summation-line">
          <Line />
        </div>

        {/* 누적 프로젝트 수 연동 */}
        <AlarmNum
          title={"누적 프로젝트"}
          num={allProjects !== null ? allProjects : "0"}
        />
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
