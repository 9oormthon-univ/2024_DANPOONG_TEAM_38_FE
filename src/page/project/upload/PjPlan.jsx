import React, { useState } from "react";
import { ReactComponent as Up8 } from "../../../assets/component/upload/up8.svg";
import { ReactComponent as Up9 } from "../../../assets/component/upload/up9.svg";
import { ReactComponent as Up10 } from "../../../assets/component/upload/up10.svg";
import { ReactComponent as Up7 } from "../../../assets/component/upload/up7.svg";
import { ReactComponent as Line } from "../../../assets/component/upload/lines.svg";
import { useLocation, useNavigate } from "react-router-dom";
import PjIntroduce from "./PjIntroduce";

const PjPlan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    category,
    images,
    mainTitle,
    subTitle,
    summary,
    region,
    targetAmount,
    startDate,
    endDate,
  } = location.state || {}; // state에서 데이터 받기

  const [introduction, setInputValue] = useState("");
  const [budgetDescription, setBudgetDescription] = useState("");
  const [scheduleDescription, setScheduleDescription] = useState("");
  const [teamDescription, setTeamDescription] = useState("");

  const handleSaveClick = () => {
    const formData = {
      category,
      targetAmount,
      startDate,
      endDate,
      images,
      mainTitle,
      subTitle,
      summary,
      region,
      introduction,
      budgetDescription,
      scheduleDescription,
      teamDescription,
    };

    // /fund 페이지로 데이터 전달
    navigate("/createuser", { state: formData });
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 300) {
      setTeamDescription(newValue);
    }
  };

  const handleChang = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 300) {
      setBudgetDescription(newValue);
    }
  };
  console.log("카테 재확인", category);
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
        {/* PjIntroduce 컴포넌트 사용 */}
        {/* <PjIntroduce
          setInputValue={setInputValue}
          setTeamDescription={setTeamDescription}
        /> */}

        <form className="pj-intro-main-write-title">
          <textarea
            className="pj-intro-main-input"
            placeholder="내용을 입력하세요"
            value={budgetDescription}
            onChange={handleChang}
          ></textarea>
        </form>

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
              onChange={(e) => setBudgetDescription(e.target.value)}
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
              onChange={(e) => setScheduleDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="pj-team">
          {/* teamDescription 입력 필드 */}
          <div className="pj-intro-container">
            <form className="pj-intro-main-write-title">
              <textarea
                className="pj-intro-main-input"
                placeholder="내용을 입력하세요"
                value={teamDescription}
                onChange={handleChange}
              ></textarea>
            </form>
          </div>
        </div>

        <div className="pj-local-next-btn" onClick={handleSaveClick}>
          저장하기
        </div>
      </div>
    </div>
  );
};

export default PjPlan;
