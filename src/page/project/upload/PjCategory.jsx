import React, { useState } from "react";

const list = [
  { id: 1, name: "🎶 음악" },
  { id: 2, name: "🎨 미술" },
  { id: 3, name: "💻 웹/앱 서비스" },
  { id: 4, name: "💄뷰티" },
  { id: 5, name: "🪑소품" },
  { id: 6, name: "🎮게임" },
];

const PjCategory = () => {
  const [activeId, setActiveId] = useState(null); // 초기값을 null로 설정

  const clickHandler = (id) => {
    setActiveId(id); // 클릭한 버튼의 id를 상태로 저장
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
            }`} // activeId와 item.id를 비교
            onClick={() => clickHandler(item.id)} // 클릭 시 해당 id를 설정
          >
            {item.name}
          </div>
        ))}
        <input
          className="pj-category-write-btn"
          placeholder="기타(직접 입력)"
        ></input>
      </div>
    </div>
  );
};

export default PjCategory;
