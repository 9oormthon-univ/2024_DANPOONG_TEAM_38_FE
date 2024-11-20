import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoostRank from "./BoostRank";
import GetBoostedProjectInfo from "../../../apis/project/GetBoostedProjectInfo";

const ComBoost = ({ project }) => {
  const navigate = useNavigate();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        const response = await GetBoostedProjectInfo(project.id);
        const currentProject = response.result;
        console.log(project.id, currentProject);
        if (currentProject) {
          setProjectDetails(currentProject);
        } else {
          console.error("프로젝트를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("프로젝트 상세 정보를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchProjectDetails();
  }, [project.id]);
  return (
    <div className="pj-detail-boost-container">
      <div className="pj-detail-boost-banner">
        🔥현재&nbsp;
        {/* 기업 수 api 연동 필요  /api/project/boosted-info*/}
        {projectDetails ? (
          <div className="pj-detail-boost-num">
            {" "}
            {projectDetails.boostedUserCount}개의 기업
          </div>
        ) : (
          <div className="pj-detail-boost-num">0개의 기업</div>
        )}
        이 함께 후원 중
      </div>
      {/* 후원하기 api 연동 필요 */}
      <div className="pj-detail-boost-main">
        <div className="pj-detail-boost-main-title-container">
          <div className="pj-detail-boost-main-title">
            <div className="pj-detail-boost-main-title-h1">후원 기업 순위</div>
            <div className="pj-detail-boost-main-title-sub">
              후원 금액이 많은 순서로 구성하였습니다.
            </div>
          </div>

          {/* 후원 기업 순위 전체보기 페이지 연동 필요 */}
          <div
            className="pj-detail-boost-main-see-all"
            onClick={() => navigate("/")}
          >
            전체보기
          </div>
        </div>
        {/* 기업 후원 순위 랭킹 api 필요  /api/project/boosted-ranking*/}

        <BoostRank projectDetails={projectDetails} />
      </div>
    </div>
  );
};

export default ComBoost;
