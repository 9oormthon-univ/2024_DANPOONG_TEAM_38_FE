import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Line } from "../../../assets/component/upload/greenline.svg";
import { ReactComponent as Pjcategory } from "../../../assets/component/upload/pjcategory.svg";
import { ReactComponent as Pjimg } from "../../../assets/component/upload/pjimg.svg";
import { ReactComponent as Pjlocal } from "../../../assets/component/upload/pjlocal.svg";
import { ReactComponent as Pjsummary } from "../../../assets/component/upload/pjsummary.svg";
import { ReactComponent as Pjtitle } from "../../../assets/component/upload/pjtitle.svg";
import { ReactComponent as Upimg } from "../../../assets/component/upload/upimg.svg";

import PjCategory from "./PjCategory";
import PjIntroduce from "./PjIntroduce";

// 지역 목록
const menu = [
  { id: 1, name: "서울", check: "SEOUL" },
  { id: 2, name: "경기도", check: "GYEONGGI" },
  { id: 3, name: "인천", check: "INCHEON" },
  { id: 4, name: "부산", check: "BUSAN" },
  { id: 5, name: "광주", check: "GWANGJU" },
  { id: 6, name: "대전", check: "DAEJEON" },
  { id: 7, name: "울산", check: "ULSAN" },
  { id: 8, name: "제주도", check: "JEJU" },
  { id: 9, name: "충청도", check: "CHUNGCHEONG" },
  { id: 10, name: "강원도", check: "GANGWON" },
  { id: 11, name: "전라도", check: "JEOLLA" },
  { id: 12, name: "경상도", check: "GYEONGSANG" },
];

const PjWrite = () => {
  const [images, setImages] = useState([]);
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [summary, setInputValue] = useState("");
  const [region, setRegion] = useState("");
  const [selectedLocal, setSelectedLocal] = useState(null); // 지역 선택 상태 관리
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const [category, setCategory] = useState("");

  const handleLocalClick = (check) => {
    setSelectedLocal(check === selectedLocal ? null : check);
    setRegion(check);
  };

  const handleSaveClick = () => {
    const formData = {
      images,
      mainTitle,
      subTitle,
      summary,
      region,
      category,
    };

    // /fund 페이지로 데이터 전달
    navigate("/fund", { state: formData });
  };
  console.log("카테 확인", category);
  return (
    <div className="pj-write-container">
      <div className="pj-write-left">
        <div className="pj-write-name">이름 연동 필요</div>
        <div className="pj-write-show-container">
          <div className="pj-write-graph">
            <Line />
          </div>
          <div className="pj-write-category">
            <Pjcategory />
          </div>
          <div className="pj-write-title">
            <Pjtitle />
          </div>
          <div className="pj-write-summary">
            <Pjsummary />
          </div>
          <div className="pj-write-img">
            <Pjimg />
          </div>
          <div className="pj-write-local">
            <Pjlocal />
          </div>
        </div>
      </div>
      <div className="pj-write-right">
        <PjCategory setCategory={setCategory} />
        <div className="pj-write-title-input">
          <input
            className="pj-write-maintitle"
            placeholder="프로젝트 대제목을 입력해주세요."
            onChange={(e) => setMainTitle(e.target.value)}
          />
          <input
            className="pj-write-subtitle"
            placeholder="프로젝트 소제목을 입력해주세요."
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="pj-write-summary-input">
          <PjIntroduce setInputValue={setInputValue} />
        </div>
        <form>
          <label htmlFor="file-upload" className="custom-file-upload">
            <div className="upload-box">
              <Upimg />
              <p>프로젝트 이미지를 업로드해주세요.</p>
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleImageChange}
            className="pj-write-img-input-hidden"
          />
        </form>
        <div className="pj-write-local-input">
          <div className="pj-write-local-input-title">
            프로젝트 지역을 선정해주세요
          </div>
          <div className="pj-local-map">
            {menu.map((local) => (
              <div
                key={local.id}
                className={`pj-select-local-check ${
                  selectedLocal === local.check ? "selected" : ""
                }`}
                onClick={() => handleLocalClick(local.check)}
              >
                {local.name}
              </div>
            ))}
          </div>
        </div>
        <div className="pj-local-next-btn" onClick={handleSaveClick}>
          저장하기
        </div>
      </div>
    </div>
  );
};

export default PjWrite;
