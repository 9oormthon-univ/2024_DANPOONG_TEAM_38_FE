import React from "react";

import { ReactComponent as Write } from "../../../../assets/component/project/write.svg";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

const BoostReview = () => {
  const navigate = useNavigate();
  return (
    <div className="pj-boost-reviews-container">
      <div className="pj-boost-reviews-comment-container">
        {/* 댓글 작성하기 ui 경로 연결 필요 */}
        <div
          className="pj-boost-reviews-comment-write-btn"
          onClick={() => navigate("")}
        >
          <Write />
          작성하기
        </div>
        <div className="pj-boost-reviews-comment-box">
          <div className="pj-boost-reviews-user-container">
            {/* 유저 이미지 API 연동 필요 */}
            <div className="pj-boost-reviews-user-img"></div>
            {/* 유저 이름 API 연동 필요 */}
            <div className="pj-boost-reviews-user-name">
              김동준
              <div className="pj-boost-reviews-user-day">0000.00.00</div>
            </div>
            <div className="pj-boost-reviews-comment-content">
              <div className="pj-boost-reviews-comment-content-user">
                사용자가 쓴 댓글
              </div>
              {/* 유저가 쓴 댓글 API 연동 필요 */}
              <div className="pj-boost-reviews-comment-content-user-write">
                정말 만족스러운 서비스였습니다! 빠르고 친절한 대응 덕분에 걱정
                없이 이용할 수 있었어요. 다음에도 꼭 이용하고 싶습니다!
              </div>
            </div>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default BoostReview;
