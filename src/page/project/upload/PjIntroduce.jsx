import React, { useState } from "react";

const PjIntroduce = ({ title, setInputValue }) => {
  const [localInputValue, setLocalInputValue] = useState(""); // 로컬 상태 관리

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 300) {
      setLocalInputValue(newValue); // 로컬 상태 업데이트
      setInputValue(newValue); // 상위 컴포넌트로 값 전달
    }
  };

  return (
    <div className="pj-intro-container">
      <form className="pj-intro-main-write-title">
        <textarea
          className="pj-intro-main-input"
          placeholder="내용을 입력하세요"
          value={localInputValue}
          onChange={handleChange}
        ></textarea>
        <div className="pj-intro-char-count">{localInputValue.length}/300</div>
      </form>
    </div>
  );
};

export default PjIntroduce;
