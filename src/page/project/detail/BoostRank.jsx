import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Like } from "../../../assets/component/project/like.svg";
import GetBoostedRanking from "../../../apis/project/GetBoostedRanking";
import GetProjectSearch from "../../../apis/project/GetProjectSearch";

const BoostRank = ({ projectDetails, projectId, projectName }) => {
  const navigate = useNavigate();
  const [ranks, setRanks] = useState([]);
  const [page, setPage] = useState(0); // 초기 값 0

  useEffect(() => {
    // GetProjectSearch에서 pageNumber를 추출하여 setPage로 저장
    const fetchProjectPage = async () => {
      try {
        if (!projectName) {
          console.error("프로젝트 이름이 없습니다.");
          return;
        }
        // 프로젝트 이름을 통해 pageNumber를 가져옵니다.
        const projectData = await GetProjectSearch(projectName);

        if (projectData && projectData.pageable) {
          const pageNumber = projectData.pageable.pageNumber;

          // 페이지 번호가 0 이상일 때만 setPage로 설정
          if (pageNumber >= 0) {
            setPage(pageNumber);
            console.log("sfsdf", pageNumber);
          } else {
            console.error("유효하지 않은 페이지 번호입니다.");
          }
        } else {
          console.error("페이지 번호를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("페이지 번호를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchProjectPage();
  }, [projectName]);

  useEffect(() => {
    const fetchBoostedRanking = async () => {
      try {
        if (!projectId || page === undefined) {
          console.error("프로젝트 ID 또는 페이지 번호가 없습니다.");
          return;
        }
        console.log("제발", projectId, page);

        // 후원 순위 데이터 불러오기
        const rankingData = await GetBoostedRanking(projectId, page);
        console.log("fofofoffo", rankingData);
        if (rankingData && rankingData.content) {
          setRanks(rankingData.content);
        } else {
          console.error("랭킹 데이터를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("랭킹 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    // 페이지 정보가 존재하면 후원 순위 데이터 불러오기
    if (page !== undefined) {
      fetchBoostedRanking();
    }
  }, [projectId, page, projectName]); // projectName도 의존성 추가

  if (!projectDetails) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="pj-detail-boost-ranking-container">
      {ranks.length > 0 ? (
        ranks.map((rank, index) => (
          <div className="pj-detail-boost-rank-container" key={index}>
            <div className="pj-detail-boost-rank-num">{index + 1}위</div>
            <div className="pj-detail-boost-rank-img">
              <img
                src={rank.image}
                alt={`${rank.companyName} 로고`}
                style={{ width: "68px", height: "68px", borderRadius: "50%" }}
              />
            </div>
            <div className="pj-detail-boost-rank-content">
              <div className="pj-detail-boost-rank-name">
                {rank.companyName}
              </div>
              <div className="pj-detail-boost-rank-won-box">
                <div className="pj-detail-boost-rank-won">
                  {rank.contributionAmount.toLocaleString()}원
                </div>
                &nbsp;후원
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="pj-detail-boost-ranking-container">
          랭킹 데이터가 없습니다.
        </div>
      )}
      <div className="pj-line"></div>
      <div className="pj-detail-boost-rank-Amount-won-box">
        <div className="pj-detail-boost-rank-Amount-won-title"> 모인 금액</div>
        <div className="pj-detail-boost-rank-Amount-won-content">
          <div className="pj-detail-boost-rank-Amount-won-content-num">
            {projectDetails ? (
              <>
                <div className="pj-detail-boost-rank-Amount-won-content-num-won">
                  {projectDetails.achievementAmount}
                  <div className="pj-detail-boost-rank-Amount-won-content-num-won-unit">
                    {" "}
                    원
                  </div>
                </div>

                <div className="pj-detail-boost-rank-Amount-won-content-percent">
                  {projectDetails.achievementRate}%달성
                </div>
              </>
            ) : (
              <>
                <div className="pj-detail-boost-rank-Amount-won-content-num-won">
                  0
                  <div className="pj-detail-boost-rank-Amount-won-content-num-won-unit">
                    {" "}
                    원
                  </div>
                </div>

                <div className="pj-detail-boost-rank-Amount-won-content-percent">
                  0%달성
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="pj-detail-boost-rank-period-box">
        <div className="pj-detail-boost-rank-period-title">남은 기간</div>
        {projectDetails ? (
          <div className="pj-detail-boost-rank-period-content">
            {projectDetails.leftDays}
            <div className="pj-detail-boost-rank-period-content-day"> 일</div>
          </div>
        ) : (
          <div className="pj-detail-boost-rank-period-content">
            0<div className="pj-detail-boost-rank-period-content-day"> 일</div>
          </div>
        )}
      </div>

      <div className="pj-detail-boost-rank-period-box">
        <div className="pj-detail-boost-rank-period-title">후원자</div>
        {projectDetails ? (
          <div className="pj-detail-boost-rank-period-content">
            {projectDetails.boostedUserCount}
            <div className="pj-detail-boost-rank-period-content-day"> 명</div>
          </div>
        ) : (
          <div className="pj-detail-boost-rank-period-content">
            0<div className="pj-detail-boost-rank-period-content-day"> 명</div>
          </div>
        )}
      </div>
      <div className="pj-detail-boost-rank-btn-container">
        <div className="pj-detail-boost-rank-like-btn">
          <Like />
          <div className="pj-detail-boost-rank-like-num">111</div>
        </div>
        <div
          className="pj-detail-boost-rank-boost-btn"
          onClick={() => navigate("/detail/boost")}
        >
          이 프로젝트 후원하기
        </div>
      </div>
    </div>
  );
};

export default BoostRank;
