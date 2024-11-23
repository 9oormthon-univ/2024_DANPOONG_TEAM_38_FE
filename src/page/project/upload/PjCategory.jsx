import React, { useState } from "react";

const list = [
  { id: 1, name: "🎶 음악", form: "MUSIC" },
  { id: 2, name: "🎨 미술", form: "ART" },
  { id: 3, name: "💻 웹/앱 서비스", form: "WEB_APP" },
  { id: 4, name: "💄뷰티", form: "BEAUTY" },
  { id: 5, name: "🪑소품", form: "ACCESSORY" },
  { id: 6, name: "🎮게임", form: "GAME" },
];

const PjCategory = ({ setCategory }) => {
  const [activeId, setActiveId] = useState(null);

  const clickHandler = (id, form) => {
    setActiveId(id); // 클릭한 버튼의 id를 상태로 저장
    setCategory(form); // 선택된 form 값을 Upload 컴포넌트로 전달
  };

  return (
    <div className="pj-category-container">
      <div className="pj-category-container-title">
        프로젝트 카테고리를 설정해주세요.
      </div>
      <div className="pj-category-select-btn-container">
        {list.map((item) => (
          <div
            key={item.id}
            className={`pj-category-select-btn${
              activeId === item.id ? " isActive" : ""
            }`}
            onClick={() => clickHandler(item.id, item.form)} // form 값을 전달
          >
            {item.name}
          </div>
        ))}
        <input
          className="pj-category-write-btn"
          placeholder="기타(직접 입력)"
          onBlur={(e) => setCategory(e.target.value)} // 기타 입력값도 category로 설정
        />
      </div>
    </div>
  );
};

export default PjCategory;
