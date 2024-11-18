import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  const hideFooterPaths = ["/login"];

  const showFooter = !hideFooterPaths.includes(path);
  return (
    <div className="layout-container">
      <Header />
      <div>
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
