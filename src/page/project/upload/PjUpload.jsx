import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as User } from "../../../assets/component/upload/up16.svg";
import { ReactComponent as Plan } from "../../../assets/component/upload/up15.svg";
import { ReactComponent as Fund } from "../../../assets/component/upload/up14.svg";
import { ReactComponent as Write } from "../../../assets/component/upload/up13.svg";
import { ReactComponent as Pencil } from "../../../assets/component/upload/pencil.svg";

const menu = [
  {
    id: 1,
    title: "기본 정보",
    content: "프로젝트와 관련된 기본 정보를 작성할 수 있어요.",
    path: "/write",
    component: <Write />,
  },
  {
    id: 2,
    title: "펀딩 계획",
    content: "프로젝트의 펀딩 계획을 정의할 수 있어요.",
    path: "/fund",
    component: <Fund />,
  },
  {
    id: 3,
    title: "프로젝트 계획",
    content: "프로젝트에 관련된 소개와 구체적인 정보를 작성할 수 있어요.",
    path: "/plan",
    component: <Plan />,
  },
  {
    id: 4,
    title: "창작자 정보",
    content: "창작자와 관련된 정보를 작성할 수 있어요.",
    path: "/createuser",
    component: <User />,
  },
];

const PjUpload = () => {
  const [isWriteMode, setIsWriteMode] = useState(false); // 상태 관리
  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };

  return (
    <div className="pj-show-container">
      <div className="pj-show-user-container">
        <div className="pj-show-img"></div>
        <div className="pj-show-content-container">
          <div className="pj-show-user-pj">이름필요의 프로젝트</div>
          <div className="pj-show-user-title">프로젝트 이름</div>
          <div className="pj-show-user-category-box">
            <div className="pj-category">카테고리</div>
            <div className="pj-region">지역</div>
          </div>
        </div>
      </div>
      {/* 마감 후기 작성 버튼 */}
      <div className="pj-show-write-contanier">
        <div
          className="pj-show-write"
          onClick={() => setIsWriteMode((prev) => !prev)} // 상태 토글
        >
          {isWriteMode ? "저장하기" : "마감 후기 작성"}
        </div>
      </div>
      <div className="pj-show-line" />
      {/* 조건에 따른 렌더링 */}
      {isWriteMode ? (
        <div className="pj-true-container">
          <div className="pj-true-title-contanier">
            <input className="pj-true-title" placeholder="제목 입력" />
            <input className="pj-true-day" placeholder="날짜 입력" />
          </div>
          <div className="pj-true-line" />
          <div className="pj-true-content-input-container">
            <textarea className="pj-true-input" placeholder="내용 입력" />
          </div>
        </div>
      ) : (
        <div className="pj-show-select-container">
          {menu.map((list) => (
            <div
              key={list.id}
              className="pj-show-select-menu"
              onClick={() => goPage(list.path)}
            >
              <div className="pj-show-select-menu-title">{list.title}</div>
              <div className="pj-show-select-menu-content">{list.content}</div>
              <div className="pj-show-select-menu-icon">{list.component}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PjUpload;
