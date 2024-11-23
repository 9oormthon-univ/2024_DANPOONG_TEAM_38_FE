import React, { useState } from "react";

import { ReactComponent as Write } from "../../../assets/component/upload/upone.svg";
import { ReactComponent as Fund } from "../../../assets/component/upload/uptwo.svg";
import { ReactComponent as Plan } from "../../../assets/component/upload/upthree.svg";
import { ReactComponent as Four } from "../../../assets/component/upload/upfour.svg";
import { useNavigate } from "react-router-dom";

const menu = [
  { id: 1, name: "기본정보", path: "/write", icon: <Write /> },
  { id: 2, name: "펀딩 계획", path: "/fund", icon: <Fund /> },
  { id: 3, name: "프로젝트 계획", path: "/plan", icon: <Plan /> },
  { id: 4, name: "창작자 정보", path: "/createuser", icon: <Four /> },
];

const UpHeader = () => {
  const [selectedLocal, setSelectedLocal] = useState(null);
  const navigate = useNavigate();
  const handleLocalClick = (checks) => {
    const check = checks.name;
    const go = checks.path;
    setSelectedLocal(check === selectedLocal ? null : check);
    navigate(go);
    console.log("sfasfasfas", checks);
  };

  return (
    <div className="upload-header-container">
      {menu.map((list) => (
        <div
          key={list.id}
          className={`upload-header-check-box ${
            selectedLocal === list.name ? "selected" : ""
          }`}
          onClick={() => handleLocalClick(list)}
        >
          {list.name}
          <div className="icon">{list.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default UpHeader;
