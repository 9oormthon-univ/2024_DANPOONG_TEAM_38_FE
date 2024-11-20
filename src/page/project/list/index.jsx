import React, { useEffect, useState } from "react";
import Search from "../../main/components/Search";
import Category from "../../main/components/category";
import { useNavigate } from "react-router-dom";
import Preview from "../../main/components/projectmore/Preview";
import Recent from "../../main/Recent";

import { ReactComponent as Right } from "../../../assets/component/project/reviewright.svg";
import { ReactComponent as Left } from "../../../assets/component/project/reviewleft.svg";
import { ReactComponent as AtRight } from "../../../assets/component/project/Atreviewright.svg";
import { ReactComponent as AtLeft } from "../../../assets/component/project/Atreviewleft.svg";

// 프로젝트 preview api 연동후 수정 필요
const data = {
  comments: [
    {
      title: "test",
      name: "김동준",
      place: "서울특별시",
    },
    {
      title: "test",
      name: "박준영",
      place: "부산광역시",
    },
    {
      title: "test",
      name: "이영희",
      place: "대구광역시",
    },
    {
      title: "test",
      name: "최민수",
      place: "인천광역시",
    },
    {
      title: "test",
      name: "정수현",
      place: "광주광역시",
    },
    {
      title: "test",
      name: "홍길동",
      place: "대전광역시",
    },
    {
      title: "test",
      name: "윤서연",
      place: "울산광역시",
    },
    {
      title: "test",
      name: "김민지",
      place: "서울특별시",
    },
    {
      title: "test",
      name: "김철수",
      place: "수원시",
    },
    {
      title: "test",
      name: "김철수",
      place: "수원시",
    },
    {
      title: "test",
      name: "김철수",
      place: "수원시",
    },
    {
      title: "test",
      name: "김철수",
      place: "수원시",
    },
    {
      title: "test",
      name: "김철수",
      place: "수원시",
    },
  ],
  totalPages: 2,
};

const ProjectList = () => {
  const navigate = useNavigate();
  const itemsPerPage = 12; // 한 페이지에 표시할 댓글 수
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //  프로젝트 preview api 연동후 수정 필요
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
    <div className="pj-list-container">
      <Search />
      <Category />
      <Recent />
      <div className="pj-list-main">
        <div className="pj-preview-grid">
          {/*  프로젝트 preview api 연동후 수정 필요 Preview 내용 수정 필요 */}
          {comments.map((comment, index) => (
            <Preview
              key={index}
              title={comment.title}
              name={comment.name}
              place={comment.place}
              onClick={() => navigate(`/detail`)}
            />
          ))}
        </div>
        <div className="pj-list-btn">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            style={{
              color: currentPage === 1 ? "#424242" : "#ABABAB",
              display: "flex",
              alignItems: "center",
            }}
          >
            {currentPage === 1 ? <AtLeft /> : <Left />} Prev
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
                    background:
                      currentPage === page ? "#00C78C" : "transparent",
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
    </div>
  );
};

export default ProjectList;
