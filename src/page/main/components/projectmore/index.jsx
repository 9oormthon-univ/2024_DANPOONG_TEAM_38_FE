import React from "react";

import { ReactComponent as Go } from "../../../../assets/component/gomore.svg";
import MoreDetail from "../../MoreDetail";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";

const ProjectMore = () => {
  const navigate = useNavigate();

  const detailHandler = () => {
    navigate("/list");
  };

  return (
    <div className="more-container">
      <div className="more-container-box">
        {/* 프로젝트 더보기 눌렀을때 프로젝트 페이지랑 연동 필요 */}
        <MoreDetail
          title={"What's up"}
          content={
            "신규 등록된 프로젝트를 확인하고, 원하는 프로젝트에 후원해보세요!"
          }
          btn={"프로젝트 더보기"}
          onClick={detailHandler}
        />
        <Preview title={" 피부 건강을 위한 기초 스킨케어 나이트루틴"} />
        <Preview title={" 피부 건강을 위한 기초 스킨케어 나이트루틴"} />
        <Preview title={" 피부 건강을 위한 기초 스킨케어 나이트루틴"} />
      </div>
    </div>
  );
};

export default ProjectMore;
