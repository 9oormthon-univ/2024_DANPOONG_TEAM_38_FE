import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import LoginFooter from "./LoginFooter";
import UpHeader from "../page/project/upload/UpHeader";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  const hideFooterPaths = [
    "/login",
    "/login/user",
    "/login/company",
    "/signup",
    "/signup/company",
  ];

  const showFooter = !hideFooterPaths.includes(path);
  const showUpHeader = ["/write", "/fund", "/plan", "/createuser"];
  const showHeader = showUpHeader.includes(path);

  // 상태를 관리하는 로직
  const isLoggedIn = !!sessionStorage.getItem("accessToken");
  const accessToken = sessionStorage.getItem("accessToken");
  return (
    <div className="layout-container">
      <Header />

      <div className="main-container">
        {/* Outlet의 context를 활용하여 isLoggedIn 전달 */}
        <Outlet context={{ isLoggedIn, accessToken }} />
      </div>
      {showFooter && <Footer />}
      {!showFooter && <LoginFooter />}
    </div>
  );
};

export default Layout;
