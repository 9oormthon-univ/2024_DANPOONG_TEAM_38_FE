import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Like } from "../../../assets/component/project/like.svg";
import GetBoostedRanking from "../../../apis/project/GetBoostedRanking";
import GetProjectSearch from "../../../apis/project/GetProjectSearch";
import { useOutletContext } from "react-router-dom";

const BoostRank = ({
  project,
  projectDetails,
  projectId,
  projectName,
  onClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [ranks, setRanks] = useState([]);
  const [page, setPage] = useState(0);

  const hideContentPath = ["/boost"];
  const showContent = !hideContentPath.includes(path);

  // useOutletContext로 isLoggedIn 상태 가져오기
  const { isLoggedIn } = useOutletContext();

  const handleNavigate = () => {
    if (isLoggedIn) {
      navigate("/boost", { state: project });
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  useEffect(() => {
    const fetchProjectPage = async () => {
      try {
        if (!projectName) {
          console.error("프로젝트 이름이 없습니다.");
          return;
        }
        const projectData = await GetProjectSearch(projectName);

        if (projectData?.pageable?.pageNumber >= 0) {
          setPage(projectData.pageable.pageNumber);
        } else {
          console.error("유효하지 않은 페이지 번호입니다.");
        }
      } catch (error) {
        console.error("페이지 번호를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchProjectPage();
  }, [projectName, onClick]);

  useEffect(() => {
    const fetchBoostedRanking = async () => {
      try {
        if (!projectId || page === undefined) {
          console.error("프로젝트 ID 또는 페이지 번호가 없습니다.");
          return;
        }

        const rankingData = await GetBoostedRanking(projectId, page);
        if (rankingData?.content) {
          setRanks(rankingData.content);
        } else {
          console.error("랭킹 데이터를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("랭킹 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    if (page !== undefined) {
      fetchBoostedRanking();
    }
  }, [projectId, page]);

  const handleBoostClick = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (!project) {
      console.error("프로젝트 데이터가 없습니다.");
      return;
    }

    navigate("/boost", { state: project });
  };

  if (!projectDetails) {
    return <div>로딩 중...</div>;
  }
  return (
    <div className="pj-detail-boost-ranking-container">
      {showContent &&
        (ranks.length > 0 ? (
          ranks.slice(0, 3).map(
            (
              rank,
              index // 여기에서 slice를 사용해 3개만 출력
            ) => (
              <div className="pj-detail-boost-rank-container" key={index}>
                <div className="pj-detail-boost-rank-num">{index + 1}위</div>
                <div className="pj-detail-boost-rank-img">
                  <img
                    src={rank.image}
                    alt={`${rank.companyName} 로고`}
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                    }}
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
            )
          )
        ) : (
          <div className="pj-detail-boost-ranking-container">
            랭킹 데이터가 없습니다.
          </div>
        ))}
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
        {showContent ? (
          <>
            <div className="pj-detail-boost-rank-like-btn">
              <Like />
              <div className="pj-detail-boost-rank-like-num">111</div>
            </div>
            <div
              className="pj-detail-boost-rank-boost-btn"
              onClick={handleNavigate}
            >
              이 프로젝트 후원하기
            </div>{" "}
          </>
        ) : (
          <>
            <div className="pj-back"> 이전</div>
            <button
              className="pj-detail-boost-rank-boost-btn"
              onClick={onClick}
              style={{ cursor: "pointer" }} // Optional styling for button behavior
            >
              후원하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BoostRank;
