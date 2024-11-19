import React from "react";
import MoreDetail from "../../MoreDetail";
import { useNavigate } from "react-router-dom";
import ComPreview from "./ComPreview";

const CompanyRank = () => {
  const navigate = useNavigate();

  const detailHandler = () => {
    navigate("/list");
  };
  return (
    <div className="rank-container">
      <div className="rank-container-box">
        {/* 기업 랭킹 조회 API */}
        <MoreDetail
          title={"Company Ranking"}
          content={"뜨거운 관심을 받은 상위 기업들을 확인해보세요!"}
          btn={"랭킹 전체보기"}
          onClick={detailHandler}
        />
        <ComPreview />
      </div>
    </div>
  );
};

export default CompanyRank;
