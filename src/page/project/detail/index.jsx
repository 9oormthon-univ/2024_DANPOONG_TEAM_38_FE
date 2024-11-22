import React from "react";
import Search from "../../main/components/Search";
import ComBoost from "./ComBoost";
import Show from "./Show";
import { Outlet, useLocation } from "react-router-dom";
import Review from "./review";

const Detail = () => {
  const location = useLocation();
  const path = location.pathname;
  const { project } = location.state || {}; // 프로젝트 내용 전달 받음

  const hideContentPath = ["/boost"];

  const showContent = !hideContentPath.includes(path);

  return (
    <div className="pj-detail-container">
      <Search />
      <div className="pj-detail-main-container">
        {project ? (
          <>
            <Show project={project} />
            {showContent && <ComBoost project={project} />}
          </>
        ) : (
          <div>프로젝트가 없어요!</div>
        )}
      </div>
      <div className="pj-detail-main-line"></div>
      {showContent && <Review project={project} />}
    </div>
  );
};

export default Detail;
