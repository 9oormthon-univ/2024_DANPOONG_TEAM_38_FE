import React from "react";
import ReviewProfile from "./ReviewProfile";
import Comment from "./Comment";

const ComReview = () => {
  return (
    <div className="pj-boost-reviews-container">
      <div className="pj-boost-reviews-comment-container">
        {/* 후원자 기업 정보 및 댓글 api 연동 필요 */}
        <ReviewProfile name={"기업명"} />
        {/* 후원자 기업 정보 및 댓글 api 연동 필요 */}
        <Comment />
      </div>
    </div>
  );
};

export default ComReview;
