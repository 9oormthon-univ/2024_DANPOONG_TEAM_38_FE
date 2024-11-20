import React, { useState, useEffect } from "react";
import { ReactComponent as Updown } from "../../../../assets/component/project/updown.svg";
import { ReactComponent as Right } from "../../../../assets/component/project/reviewright.svg";
import { ReactComponent as Left } from "../../../../assets/component/project/reviewleft.svg";
import { ReactComponent as AtRight } from "../../../../assets/component/project/Atreviewright.svg";
import { ReactComponent as AtLeft } from "../../../../assets/component/project/Atreviewleft.svg";

// 후원 댓글 api 연동 전 임시 데이터
const data = {
  comments: [
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "정말 만족스러운 서비스였습니다!",
    },
    {
      userName: "김동준",
      date: "2024.11.18",
      amount: "200,000원",
      comment: "추가적인 댓글입니다.",
    },
  ],
  totalPages: 2,
};

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 한 페이지에 표시할 댓글 수

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setComments(data.comments.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < data.totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pj-boost-review-comments-container">
      {/* 후원 금액 높은 순에 따른 정렬 기능 구현 필요 */}
      <div className="pj-boost-review-comments-select-rank-btn">
        후원 금액 높은 순 <Updown />
      </div>
      {/* 후원 후기 댓글 api 연동 필요 */}
      <div className="pj-boost-review-show-comments-container">
        {comments.map((comment, index) => (
          <div className="pj-boost-comments-box" key={index}>
            <div className="pj-boost-reviews-show-comments-user-name">
              {comment.userName}
              <div className="pj-boost-reviews-show-comments-user-day">
                {comment.date}
              </div>
            </div>
            <div className="pj-boost-reviews-show-comments-content">
              <div className="pj-boost-reviews-show-comments-content-user">
                {comment.amount} 후원
              </div>
              <div className="pj-boost-reviews-show-comments-content-user-write">
                {comment.comment}
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
          {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
            (page) => (
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
            )
          )}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === data.totalPages}
          style={{
            color: currentPage === data.totalPages ? "#424242" : "#ABABAB",
            display: "flex",
            alignItems: "center",
          }}
        >
          Next {currentPage === data.totalPages ? <AtRight /> : <Right />}
        </button>
      </div>
    </div>
  );
};

export default Comment;
