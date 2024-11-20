import React from "react";

import { ReactComponent as Go } from "../../../../assets/component/gomore.svg";
import MoreDetail from "../../MoreDetail";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";

const ProjectMore = () => {
  const navigate = useNavigate();

  const detailHandler = () => {
    // 작업하기 위해 경로 수정 추후 프로젝트 리스트 ui 구축시 /list 로 변경 필요 라우터도
    navigate("/list");
  };

  return (
    <div className="more-container">
      <div className="more-container-box">
        {/* 프로젝트 더보기 눌렀을때 프로젝트 페이지랑 연동 필요 */}
        {/* 신규 등록 조회 API 연동*/}
        <MoreDetail
          title={"What's up"}
          content={
            "신규 등록된 프로젝트를 확인하고, 원하는 프로젝트에 후원해보세요!"
          }
          btn={"프로젝트 더보기"}
          onClick={detailHandler}
        />
        <div className="more-preview-container">
          <Preview title={" 피부 건강을 위한 기초 스킨케어 나이트루틴"} />
          <Preview title={" 피부 건강을 위한 기초 스킨케어 나이트루틴"} />
          <Preview title={" 피부 건강을 위한 기초 스킨케어 나이트루틴"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectMore;
