import React, { useState } from "react";
import Search from "../../main/components/Search";

import { ReactComponent as Logo } from "../../../assets/component/project/uploadlogo.svg";
import PjCategory from "./PjCategory";
import PjIntroduce from "./PjIntroduce";
import PjPreparation from "./PjPreparation";

import createProject from "../../../apis/project/PostCreateProject";
import { useOutletContext } from "react-router-dom";

const Upload = () => {
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [account, setAccount] = useState("");
  const [budgetDescription, setBudgetDescription] = useState("");
  const [scheduleDescription, setScheduleDescription] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState(0);
  const [introduction, setIntroduction] = useState("");
  const [images, setImages] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [summary, setSummary] = useState("");

  const { isLoggedIn, accessToken } = useOutletContext();
  console.log("받은 토큰 확인", accessToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create requestData with all required fields
    const requestData = {
      mainTitle,
      subTitle,
      category,
      region,
      account,
      budgetDescription,
      scheduleDescription,
      teamDescription,
      targetAmount,
      introduction,
      images,
      startDate,
      endDate,
      summary,
      accessToken,
    };

    try {
      const result = await createProject(requestData);
      console.log("프로젝트 생성 성공:", result);
      // Handle success (e.g., redirect, show success message, etc.)
    } catch (error) {
      console.error("프로젝트 생성 실패:", error);
    }
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  return (
    <div>
      <h1>프로젝트 생성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>프로젝트 제목</label>
          <input
            type="text"
            value={mainTitle}
            onChange={(e) => setMainTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>서브 제목</label>
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>카테고리</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>지역</label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>계좌 정보</label>
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>예산 설명</label>
          <textarea
            value={budgetDescription}
            onChange={(e) => setBudgetDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>일정 설명</label>
          <textarea
            value={scheduleDescription}
            onChange={(e) => setScheduleDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>팀 설명</label>
          <textarea
            value={teamDescription}
            onChange={(e) => setTeamDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>목표 금액</label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>프로젝트 소개</label>
          <textarea
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            required
          />
        </div>
        <div>
          <label>시작일</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>종료일</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>요약</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>
        <div>
          <label>이미지 업로드</label>
          <input type="file" multiple onChange={handleImageChange} />
        </div>
        <button type="submit">프로젝트 생성</button>
      </form>
    </div>
  );
};

// return (
// // ui아직 미완성
// // 프로젝트 만드는 api 연동 필요
// <div className="upload-container">
//   <Search />
//   <div className="upload-main-container">
//     <div className="upload-main-logo-container">
//       <Logo />
//     </div>
//     <div className="upload-main-write-container">
//       {/* 카테고리, 내용입력 api 연동 필요 */}
//       <PjCategory />
//       <PjIntroduce />
//       {/* 프로젝트 작성1에서 다음 버튼 만들어지면 그후 넘어가게 연동 필요 */}
//       {/* <PjPreparation /> */}
//     </div>
//   </div>
// </div>

// );

export default Upload;
