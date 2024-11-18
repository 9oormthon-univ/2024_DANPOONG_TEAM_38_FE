import React from "react";
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
  return (
    <div className="main-container">
      <Outlet />
      <Recent />
      <Search />
      <Summation />
      <Category />
      <ProjectMore />
      <CompanyRank />
      <Welcome />
      <Upload />
    </div>
  );
};

export default Main;
