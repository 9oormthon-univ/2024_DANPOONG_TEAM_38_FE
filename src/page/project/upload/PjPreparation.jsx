import React, { useState } from "react";
import { ReactComponent as AtCheck } from "../../../assets/component/upload/ActiceCheck.svg";
import { ReactComponent as Check } from "../../../assets/component/upload/check.svg";

const list = [
  { id: 1, icon: "👤", title: " 대표자는 만 19세~ 34세 청년이어야합니다. " },
  { id: 2, icon: "📞", title: " 본인 명의의 전화번호가 필요합니다. " },
  {
    id: 3,
    icon: "🪪",
    title: " 정산을 위한 사업자 등록증이나 신분증, 은행 계좌를 준비해주세요. ",
  },
];

const PjPreparation = () => {
  // 준비 상태 관리
  const [completed, setCompleted] = useState([]);

  const toggleCheck = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="pj-pre-container">
      <div className="pj-pre-title">준비사항</div>
      {list.map((menu) => (
        <div key={menu.id} className="pj-pre-check-container">
          <div className="pj-pre-content-icone">{menu.icon}</div>
          <div className="pj-pre-check-content">{menu.title}</div>
          <div
            className="pj-pre-check-btn"
            onClick={() => toggleCheck(menu.id)}
          >
            {completed.includes(menu.id) ? <AtCheck /> : <Check />}
          </div>
        </div>
      ))}
      {/* 프로젝트 관리 경로 추가 필요 */}
      <div className="pj-pre-btn-container">
        <div className="pj-pre-back-btn">뒤로가기</div>
        <div
          className={`pj-pre-next-btn${completed.length > 0 ? "isActive" : ""}`}
        >
          시작하기
        </div>
      </div>
    </div>
  );
};

export default PjPreparation;
