import React, { useState } from "react";

const list = [
  { id: 1, name: "🎶 음악", forms: "MUSIC" },
  { id: 2, name: "🎨 미술", forms: "ART" },
  { id: 3, name: "💻 웹/앱 서비스", forms: "WEB_APP" },
  { id: 4, name: "💄뷰티", forms: "BEAUTY" },
  { id: 5, name: "🪑소품", forms: "ACCESSORY" },
  { id: 6, name: "🎮게임", forms: "GAME" },
];

const PjCategory = ({ setCategory }) => {
  const [activeId, setActiveId] = useState(null);

  // 유효한 카테고리인지 체크하는 함수
  const isValidCategory = (category) => {
    const validCategories = [
      "MUSIC",
      "ART",
      "WEB_APP",
      "BEAUTY",
      "ACCESSORY",
      "GAME",
    ];
    return validCategories.includes(category);
  };

  const clickHandler = (id, form) => {
    setActiveId(id); // 클릭한 버튼의 id를 상태로 저장
    if (form && isValidCategory(form)) {
      // 유효한 카테고리 값인지 확인
      setCategory(form); // 선택된 form 값을 Upload 컴포넌트로 전달
    } else {
      setCategory(""); // 유효하지 않으면 빈 문자열을 전달
    }
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
            onClick={() => clickHandler(item.id, item.forms)} // form 값을 전달
          >
            {item.name}
          </div>
        ))}
        <input
          className="pj-category-write-btn"
          placeholder="기타(직접 입력)"
          onBlur={(e) => {
            const value = e.target.value.trim();
            if (value) {
              setCategory(value); // 사용자가 입력한 값이 유효하면 전달
            } else {
              setCategory(""); // 빈 값일 경우 처리
            }
          }} // 기타 입력값도 category로 설정
        />
      </div>
    </div>
  );
};

export default PjCategory;
