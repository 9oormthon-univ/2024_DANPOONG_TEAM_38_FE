import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Write } from "../../../../assets/component/project/write.svg";

const ReviewProfile = ({ myreviews }) => {
  const navigate = useNavigate();
  return (
    <div className="pj-booost">
      {/* 댓글 작성하기 ui 경로 연결 필요 */}
      <div
        className="pj-boost-reviews-comment-write-btn"
        onClick={() => navigate("")}
      >
        작성하기
      </div>
      <div className="pj-boost-reviews-comment-box">
        <div className="pj-boost-reviews-user-container">
          {/* 기업 ,유저 이미지 API 연동 필요 */}
          {myreviews.profileImage}
          <div className="pj-boost-reviews-user-img"></div>
          {/* 기업,유저 이름 API 연동 필요 */}
          <div className="pj-boost-reviews-user-name">
            {myreviews.author}
            <div className="pj-boost-reviews-user-day">
              {myreviews.createdAt}
            </div>
          </div>
          <div className="pj-boost-reviews-comment-content">
            <div className="pj-boost-reviews-comment-content-user">
              사용자가 쓴 댓글
            </div>
            {/* 유저가 쓴 댓글 API 연동 필요 */}
            <div className="pj-boost-reviews-comment-content-user-write">
              {myreviews.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProfile;
