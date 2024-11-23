import React, { useState } from "react";
import Search from "../../main/components/Search";

import { ReactComponent as Logo } from "../../../assets/component/project/uploadlogo.svg";
import PjCategory from "./PjCategory";
import PjIntroduce from "./PjIntroduce";

import createProject from "../../../apis/project/PostCreateProject";
import { useOutletContext } from "react-router-dom";

const Upload = () => {
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState(""); // 선택된 카테고리 form 값 저장
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

    const requestData = {
      mainTitle,
      subTitle,
      category, // 선택된 카테고리 form 값
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
      // 성공 처리 로직
    } catch (error) {
      console.error("프로젝트 생성 실패:", error);
    }
  };
  console.log("카테고리 확인", category);
  return (
    <div className="upload-container">
      <Search />
      <div className="upload-main-container">
        <div className="upload-main-logo-container">
          <Logo />
        </div>
        <div className="upload-main-write-container">
          <PjCategory setCategory={setCategory} /> {/* setCategory 전달 */}
          <PjIntroduce />
        </div>
      </div>
    </div>
  );
};

export default Upload;
