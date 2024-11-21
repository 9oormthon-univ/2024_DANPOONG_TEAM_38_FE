import React, { useState, useEffect } from "react";
import { ReactComponent as Updown } from "../../../../assets/component/project/updown.svg";
import { ReactComponent as Right } from "../../../../assets/component/project/reviewright.svg";
import { ReactComponent as Left } from "../../../../assets/component/project/reviewleft.svg";
import { ReactComponent as AtRight } from "../../../../assets/component/project/Atreviewright.svg";
import { ReactComponent as AtLeft } from "../../../../assets/component/project/Atreviewleft.svg";

const Comment = ({ review }) => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // review 데이터가 올바르게 전달되었을 때, comments 상태 업데이트
  useEffect(() => {
    if (review && Array.isArray(review)) {
      setComments([review]); // review 배열이 아닌, 객체가 하나 있는 경우 배열 형태로 변환하여 사용
    } else {
      setComments([review]); // review가 객체인 경우 (배열로 감싸서)
    }
  }, [review]); // review가 변경될 때마다 실행

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(comments.length / itemsPerPage))
      setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pj-boost-review-comments-container">
      <div className="pj-boost-review-comments-select-rank-btn">
        후원 금액 높은 순 <Updown />
      </div>

      <div className="pj-boost-review-show-comments-container">
        {comments.map((comment, index) => (
          <div className="pj-boost-comments-box" key={index}>
            <div className="pj-boost-reviews-show-comments-user-name">
              {comment.author || "Unknown Author"}{" "}
              {/* 'author' 필드로 사용자명 출력 */}
              <div className="pj-boost-reviews-show-comments-user-day">
                {new Date(comment.createdAt).toLocaleDateString() ||
                  "Unknown Date"}{" "}
                {/* 'createdAt' 필드로 날짜 출력 */}
              </div>
            </div>
            <div className="pj-boost-reviews-show-comments-content">
              <div className="pj-boost-reviews-show-comments-content-user">
                {comment.amount} 후원
              </div>
              <div className="pj-boost-reviews-show-comments-content-user-write">
                {comment.description || "No description provided"}{" "}
                {/* 'description' 필드로 내용 출력 */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pj-comments-btn">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            color: currentPage === 1 ? "#424242" : "#ABABAB",
            display: "flex",
            alignItems: "center",
          }}
        >
          {currentPage === 1 ? <AtLeft /> : <Left />}Prev
        </button>
        <div className="pj-comments-pages">
          {Array.from(
            { length: Math.ceil(comments.length / itemsPerPage) },
            (_, i) => i + 1
          ).map((page) => (
            <span
              key={page}
              className="pj-comments-page"
              style={{
                gap: "25px",
                borderRadius: "16px",
                padding: "5px 10px",
                cursor: "pointer",
                background: currentPage === page ? "#00C78C" : "transparent",
                opacity: currentPage === page ? "1" : "0.6",
                color: currentPage === page ? "#FFFFFF" : "#424242",
              }}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(comments.length / itemsPerPage)}
          style={{
            color:
              currentPage === Math.ceil(comments.length / itemsPerPage)
                ? "#424242"
                : "#ABABAB",
            display: "flex",
            alignItems: "center",
          }}
        >
          Next{" "}
          {currentPage === Math.ceil(comments.length / itemsPerPage) ? (
            <AtRight />
          ) : (
            <Right />
          )}
        </button>
      </div>
    </div>
  );
};

export default Comment;
