import React from "react";
import { ReactComponent as Go } from "../../assets/component/gomore.svg";

const MoreDetail = ({ title, content, btn, onClick }) => {
  return (
    <div className="more-explanation-container">
      <div className="more-explanation-title">{title}</div>
      <div className="more-explanation-content">{content}</div>
      <div className="more-project-btn" onClick={onClick}>
        {btn}
        <div className="more-project-btn-icon">
          <Go />
        </div>
      </div>
    </div>
  );
};

export default MoreDetail;
