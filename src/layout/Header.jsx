import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Fundboost } from "../assets/applogo/fundboost.svg";
import { ReactComponent as Back } from "../assets/component/back.svg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "서비스 소개", path: "/introduction" },
    { name: "프로젝트 리스트", path: "/list" },
    { name: "프로젝트 업로드", path: "/upload" },
    { name: "이벤트", path: "/event" },
  ];

  const isActive = (path) => location.pathname === path;

  const goMenuHandler = (path) => {
    navigate(path);
  };

  return (
    <div className="header-container">
      <div className="header-title-container">
        <div className="header-main" onClick={() => navigate("/")}>
          <Fundboost />
        </div>

        <div className="header-title-list-container">
          {menu.map((item) => (
            <div
              key={item.path}
              className={`header-title-menu ${
                isActive(item.path) ? "active" : ""
              }`}
              onClick={() => goMenuHandler(item.path)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="header-login-container">
          <div className="header-login" onClick={() => navigate("/login")}>
            로그인
            <Back />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
