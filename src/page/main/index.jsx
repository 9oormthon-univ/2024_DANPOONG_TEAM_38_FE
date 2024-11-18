import React from "react";
import { Outlet } from "react-router-dom";
import Search from "./components/Search";
import Summation from "./components/summation";
import Category from "./components/category";
import ProjectMore from "./components/projectmore";
const Main = () => {
  return (
    <div className="main-container">
      <Outlet />
      <Search />
      <Summation />
      <Category />
      <ProjectMore />
    </div>
  );
};

export default Main;
