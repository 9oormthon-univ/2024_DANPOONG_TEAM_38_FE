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

  const hideContentPath = ["/detail/boost"];

  const showContent = !hideContentPath.includes(path);

  return (
    <div className="pj-detail-container">
      <Search />
      <div className="pj-detail-main-container">
        {project ? (
          <>
            {showContent && <Show project={project} />}
            {showContent && <ComBoost project={project} />}
            <Outlet />
          </>
        ) : (
          <div>프로젝트가 없어요!</div>
        )}
      </div>
      <div className="pj-detail-main-line"></div>
      <Review />
    </div>
  );
};

export default Detail;
