import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import ReviewProfile from "./ReviewProfile";
import GetReview from "../../../../apis/project/GetReview";
import GetMyReview from "../../../../apis/project/GetMyReview";
import { ReactComponent as Logo } from "../../../../assets/component/project/logo.svg";

const BoostReview = ({ project }) => {
  const [reviews, setReviews] = useState([]); // 후기를 저장할 상태
  const [myreviews, setMyReviews] = useState(null); // 후기를 저장할 상태, 초기값은 null

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        const reviewType = "SUPPORTER_REVIEW"; // 후기를 조회할 타입 (COMPANY_REVIEW 고정)

        // GetReview API 호출, project.id와 reviewType을 전달
        const response = await GetReview(project.id, reviewType);

        if (response && response.length > 0) {
          setReviews(response); // 응답 데이터로 리뷰 목록을 업데이트
        } else {
          console.error("후기를 내용을 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("후기를 불러오는 데 실패했습니다(에러).", error);
      }
    };

    const fetchMyReviews = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        // GetMyReview API 호출, project.id 전달
        const response = await GetMyReview(project.id);

        if (response && response.length > 0) {
          setMyReviews(response[0]); // 첫 번째 리뷰만 사용한다고 가정
        } else {
          console.error("후기를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("후기를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchMyReviews();
    fetchReviews();
  }, [project.id]);

  return (
    <div className="pj-boost-reviews-container">
      <div className="pj-boost-reviews-comment-container">
        {/* 사용자가 쓴 리뷰 프로필 */}
        {myreviews && <ReviewProfile myreviews={myreviews} />}

        {/* 각 후기를 댓글로 표시 */}
        {reviews.length > 0 ? (
          reviews.map((review) => <Comment key={review.id} review={review} />)
        ) : (
          <div className="pj-deadline-non-content">
            <Logo />
            등록된 마감 후기가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default BoostReview;
