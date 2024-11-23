import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Fundboost } from "../assets/applogo/fundboost.svg";
import { ReactComponent as Back } from "../assets/component/back.svg";
import PostCompanyLogout from "../apis/login/company/PostCompanyLogout";
import DeleteKakaoLogout from "../apis/login/DeleteKakaoLogout";
import UpHeader from "../page/project/upload/UpHeader";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menu = [
    { name: "서비스 소개", path: "/introduction" },
    { name: "프로젝트 리스트", path: "/list" },
    { name: "프로젝트 업로드", path: "/nologin" },
    { name: "이벤트", path: "/event" },
  ];
  const menuok = [
    { name: "서비스 소개", path: "/introduction" },
    { name: "프로젝트 리스트", path: "/list" },
    { name: "프로젝트 업로드", path: "/upload" },
    { name: "이벤트", path: "/event" },
  ];

  const showUpHeader = ["/write", "/fund", "/plan", "/createuser"];
  const showHeader = showUpHeader.includes(path);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    setIsLoggedIn(!!token);

  }, [location.pathname]);

  const isActive = (menuPath) => location.pathname === menuPath;

  const goMenuHandler = (menuPath) => {
    navigate(menuPath);
  };

  const clickLogout = async () => {
    const type = sessionStorage.getItem("type");

    if (type === "USER") {
      await DeleteKakaoLogout();
    } else if (type === "COMPANY") {
      const result = await PostCompanyLogout();
      if (result?.status === 200) {
        sessionStorage.clear();
        alert("로그아웃 하였습니다.");
        setIsLoggedIn(false);
        navigate("/");
      }
    }
  };

  return (
    <div className="header-container">
      <div className="header-title-container">
        <div className="header-main" onClick={() => navigate("/")}>
          <Fundboost />
        </div>

        <div className="header-title-list-container">
          {(isLoggedIn ? menuok : menu).map((item) => (
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
          {isLoggedIn ? (
            <>
              <button
                className="header-mypage"
                onClick={() => navigate("/myPage")}
              >
                마이페이지
              </button>
              <button className="header-logout" onClick={clickLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <button className="header-login" onClick={() => navigate("/login")}>
              로그인
              <Back />
            </button>
          )}
        </div>
      </div>
      {showHeader && <UpHeader />}
    </div>
  );
};

export default Header;
