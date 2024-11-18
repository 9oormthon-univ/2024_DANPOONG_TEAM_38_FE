import React from "react";
import ComImg from "./ComImg";

const menu = [
  { name: "주간" },
  { name: "월간" },
  { name: "전체" },
  { name: "프로젝트 수" },
];

const ComPreview = () => {
  return (
    <div className="rank-preview-container">
      {/* 주간,월간 별로 기업 랭킹 불러오기 필요 */}
      <div className="rank-preview-menu-container">
        {menu.map((day) => (
          <div className="rank-preview-menus">{day.name}</div>
        ))}
      </div>

      {/* 기업 이미지 연동 필요 */}
      <div className="rank-compant-img">
        <ComImg />
        <ComImg />
        <ComImg />
      </div>
      <div className="rank-preview-next-btn"></div>
    </div>
  );
};

export default ComPreview;
