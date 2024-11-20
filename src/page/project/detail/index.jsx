import React from "react";
import Search from "../../main/components/Search";
import ComBoost from "./ComBoost";
import Show from "./Show";
import { Outlet, useLocation } from "react-router-dom";
import Review from "./review";

const Detail = () => {
  const location = useLocation();
  const path = location.pathname;

  const hideContentPath = ["/detail/boost"];

  const showContent = !hideContentPath.includes(path);
  return (
    <div className="pj-detail-container">
      <Search />
      <div className="pj-detail-main-container">
        {showContent && <Show />}
        {showContent && <ComBoost />}
        <Outlet />
      </div>
      <div className="pj-detail-main-line"></div>
      <Review />
    </div>
  );
};

export default Detail;
