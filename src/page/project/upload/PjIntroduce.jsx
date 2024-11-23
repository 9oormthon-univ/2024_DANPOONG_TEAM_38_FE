import React, { useState } from "react";

const PjIntroduce = ({ title }) => {
  const [inputValue, setInputValue] = useState(""); // 입력 값 상태 관리

  const handleChange = (e) => {
    if (e.target.value.length <= 300) {
      setInputValue(e.target.value); // 글자수 제한
    }
  };

  return (
    <div className="pj-intro-container">
      <form className="pj-intro-main-write-title">
        <textarea
          className="pj-intro-main-input"
          placeholder="내용을 입력하세요"
          value={inputValue}
          onChange={handleChange}
        ></textarea>
        <div className="pj-intro-char-count">{inputValue.length}/300</div>
      </form>
    </div>
  );
};

export default PjIntroduce;
