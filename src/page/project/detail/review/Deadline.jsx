import React, { useState, useEffect } from "react";
import { ReactComponent as Share } from "../../../../assets/component/project/share.svg";
import { ReactComponent as Logo } from "../../../../assets/component/project/logo.svg";
import GetReview from "../../../../apis/project/GetReview";

const Deadline = ({ project }) => {
  const [reviews, setReviews] = useState([]); // 후기를 저장할 상태

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        const reviewType = "COMPLETION_REVIEW"; // 후기를 조회할 타입

        // GetReview API 호출, project.id와 reviewType을 전달
        const response = await GetReview(project.id, reviewType);

        if (response && response.length > 0) {
          setReviews(response); // 응답 데이터로 리뷰 목록을 업데이트
        } else {
          console.error("마감후기를 내용을 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("후기를 불러오는 데 실패했습니다(에러).", error);
      }
    };

    fetchReviews();
  }, [project.id]);

  // 첫 번째 리뷰 가져오기 (API가 배열을 반환하므로)
  const firstReview = reviews.length > 0 ? reviews[0] : null;

  return (
    <div className="pj-deadline-container">
      {firstReview ? (
        <>
          <div className="pj-deadline-title-container">
            <div className="pj-deadline-title">
              {firstReview.title}
              <div className="pj-deadline-sub-title">
                {new Date(firstReview.createdAt).toLocaleDateString("ko-KR")}
              </div>
            </div>
            <div className="pj-share-icon">
              <Share />
            </div>
          </div>
          <div className="pj-deadline-line"></div>
          {/* 마감 후기 작성 내용 API */}
          <div className="pj-deadline-content">{firstReview.description}</div>
        </>
      ) : (
        <div className="pj-deadline-non-content">
          <Logo />
          등록된 마감 후기가 없습니다.
        </div>
      )}
    </div>
  );
};

export default Deadline;
