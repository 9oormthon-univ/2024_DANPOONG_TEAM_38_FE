import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router의 네비게이션 훅
import { ReactComponent as GoSearch } from "../../../assets/component/search.svg";
import GetProjectSearch from "../../../apis/project/GetProjectSearch";

const Search = ({
  keyword: parentKeyword,
  setKeyword: parentSetKeyword,
  setSearchResults = () => {},
}) => {
  const [localKeyword, setLocalKeyword] = useState(""); // 로컬 검색어 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(""); // 오류 상태
  const navigate = useNavigate(); // React Router 네비게이션 훅

  const keyword = parentKeyword !== undefined ? parentKeyword : localKeyword;
  const setKeyword =
    parentSetKeyword !== undefined ? parentSetKeyword : setLocalKeyword;

  const handleInputChange = async (e) => {
    const value = e.target.value; // 입력값 가져오기
    setKeyword(value); // 상태 업데이트

    if (value.length < 2) {
      setError("검색어는 2글자 이상이어야 합니다.");
      setSearchResults([]); // 검색 결과 초기화
      return;
    }

    setError(""); // 오류 초기화
    setLoading(true);

    try {
      const data = await GetProjectSearch(value); // API 호출
      setSearchResults(data.content); // 검색 결과 업데이트
    } catch (err) {
      setError("검색 중 오류가 발생했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    if (keyword.trim().length > 0) {
      // 검색어가 있을 때만 /search로 이동
      navigate("/search", {
        state: { keyword }, // 검색어만 전달
      });
    } else {
      alert("검색어를 입력하세요!"); // 입력이 없을 경우 경고
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(); // 엔터키 눌렀을 때 검색 실행
    }
  };

  return (
    <div className="search-container">
      <div className="search-form-container">
        <input
          className="search-input-container"
          value={keyword} // 상태로 입력값 관리
          onChange={handleInputChange} // 입력값 변경 이벤트 핸들러
          onKeyPress={handleKeyPress} // 엔터키 이벤트 핸들러
          placeholder="검색어를 입력하세요"
        />
        <GoSearch className="search-input-icon" onClick={handleSearchSubmit} />{" "}
        {/* 검색 아이콘 클릭 이벤트 */}
      </div>
    </div>
  );
};

export default Search;
