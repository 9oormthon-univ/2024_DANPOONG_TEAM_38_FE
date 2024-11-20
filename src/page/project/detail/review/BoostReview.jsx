import React from "react";
import Comment from "./Comment";
import ReviewProfile from "./ReviewProfile";

const BoostReview = () => {
  return (
    <div className="pj-boost-reviews-container">
      <div className="pj-boost-reviews-comment-container">
        {/* 후원자 유저 정보 및 댓글 api 연동 필요 */}
        <ReviewProfile name={"김동준"} />
        {/* 후원자 유저 정보 및 댓글 api 연동 필요 */}
        <Comment />
      </div>
    </div>
  );
};

export default BoostReview;
