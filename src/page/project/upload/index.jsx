import React from "react";
import Search from "../../main/components/Search";

import { ReactComponent as Logo } from "../../../assets/component/project/uploadlogo.svg";
import PjCategory from "./PjCategory";
import PjIntroduce from "./PjIntroduce";
import PjPreparation from "./PjPreparation";

const Upload = () => {
  return (
    // 프로젝트 만드는 api 연동 필요
    <div className="upload-container">
      <Search />
      <div className="upload-main-container">
        <div className="upload-main-logo-container">
          <Logo />
        </div>
        <div className="upload-main-write-container">
          {/* 카테고리, 내용입력 api 연동 필요 */}
          <PjCategory />
          <PjIntroduce />
          {/* 프로젝트 작성1에서 다음 버튼 만들어지면 그후 넘어가게 연동 필요 */}
          <PjPreparation />
        </div>
      </div>
    </div>
  );
};

export default Upload;
