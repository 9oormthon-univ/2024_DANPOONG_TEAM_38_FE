import React from "react";

import { ReactComponent as GoSearch } from "../../../assets/component/search.svg";

const Search = () => {
  return (
    <div className="search-container">
      <form className="search-form-container">
        <input className="search-input-container" />
        <button className="search-input-btn">
          {/* 해당 버튼 눌렀을때 유저랑 프로젝트 찾는 작업 필요 */}
          <GoSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
