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
import GetAllProject from "../../../apis/project/GetAllProject";

const ProjectList = () => {
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // 프로젝트 API 데이터 불러오기
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await GetAllProject(currentPage - 1, itemsPerPage); // 페이지 수에 맞는 데이터 불러오기
      if (Array.isArray(data)) {
        setComments(data); // API 응답이 배열일 경우 comments 상태 업데이트
      } else {
        console.error("API 응답이 배열이 아닙니다:", data);
        setComments([]); // 만약 배열이 아니면 빈 배열로 초기화
      }
    };

    fetchProjects();
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < 1) setCurrentPage((prev) => prev + 1);
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
          {comments.length > 0 ? (
            comments.map((project, index) => (
              <Preview
                key={index}
                title={project.mainTitle}
                image={project.image}
                category={project.category}
                region={project.region}
                progressPeriod={project.progressPeriod}
                progressRate={project.progressRate}
                achievedAmount={project.achievedAmount}
                onClick={() => navigate(`/detail`)}
              />
            ))
          ) : (
            <div>프로젝트가 없습니다.</div>
          )}
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
            {Array.from({ length: 1 }, (_, i) => i + 1).map((page) => (
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
            disabled={currentPage === 1}
            style={{
              color: currentPage === 1 ? "#424242" : "#ABABAB",
              display: "flex",
              alignItems: "center",
            }}
          >
            Next {currentPage === 1 ? <AtRight /> : <Right />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
