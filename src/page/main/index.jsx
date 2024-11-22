import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";
import Summation from "./components/summation";
import Category from "./components/category";
import ProjectMore from "./components/projectmore";
import CompanyRank from "./components/companyrank";
import Welcome from "./components/detail/Welcome";
import Upload from "./components/detail/Upload";
import Recent from "./Recent";

const Main = () => {
  const [recentImage, setRecentImage] = useState(""); // 최근 본 이미지 상태 관리

  return (
    <div className="main-container">
      <Outlet />
      <Recent recentImage={recentImage} />
      <Search />
      <Summation />
      <Category />
      <ProjectMore setRecentImage={setRecentImage} />
      <CompanyRank />
      <Welcome />
      <Upload />
    </div>
  );
};

export default Main;
