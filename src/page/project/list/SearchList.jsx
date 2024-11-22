import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Preview from "../../main/components/projectmore/Preview";
import Category from "../../main/components/category";
import Recent from "../../main/Recent";
import Search from "../../main/components/Search";
import GetProjectSearch from "../../../apis/project/GetProjectSearch"; // API 호출

const SearchResults = () => {
  const { state } = useLocation(); // 검색어와 결과를 state로 받음
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태
  const [keyword, setKeyword] = useState(state?.keyword || ""); // 검색어 상태
  const navigate = useNavigate(); // 네비게이션 훅

  // 컴포넌트 마운트 시, keyword를 받아서 검색 실행
  useEffect(() => {
    if (state?.keyword) {
      setKeyword(state.keyword); // 키워드 상태 업데이트
      handleSearchSubmit(state.keyword); // 새로운 키워드로 검색
    }
  }, [state?.keyword]);

  const detailHandler = (project) => {
    navigate("/detail", { state: { project } }); // 프로젝트 상세 페이지로 이동
  };

  const handleSearchSubmit = async (newKeyword) => {
    if (newKeyword.trim().length > 0) {
      try {
        const data = await GetProjectSearch(newKeyword); // 새로운 검색어로 API 호출
        setSearchResults(data.content); // 검색 결과 업데이트
      } catch (err) {
        console.error("검색 중 오류가 발생했습니다.", err);
      }
    }
  };

  return (
    <div className="pj-list-container">
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        setSearchResults={setSearchResults} // 검색 결과 업데이트
      />
      <Category />
      <Recent />
      <div className="pj-list-main">
        <div className="pj-preview-grid">
          {searchResults.length > 0 ? (
            searchResults.map((project, index) => (
              <Preview
                key={index}
                title={project.mainTitle}
                image={project.image}
                category={project.category}
                region={project.region}
                progressPeriod={project.progressPeriod}
                progressRate={project.progressRate}
                achievedAmount={project.achievedAmount}
                onClick={() => detailHandler(project)} // 상세 페이지로 이동
              />
            ))
          ) : (
            <div>검색 결과가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
