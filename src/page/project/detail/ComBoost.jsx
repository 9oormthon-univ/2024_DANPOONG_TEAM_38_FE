import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import BoostRank from "./BoostRank";
import GetBoostedProjectInfo from "../../../apis/project/GetBoostedProjectInfo";
import PostBoostProject from "../../../apis/project/PostBoost"; // API 호출 함수 임포트

const ComBoost = ({ project }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [projectDetails, setProjectDetails] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [amount, setAmount] = useState(""); // 후원 금액 상태 추가
  const [click, setClick] = useState(null);
  const [donationStatus, setDonationStatus] = useState(null);
  // Outlet context로 isLoggedIn과 accessToken 가져오기
  const { isLoggedIn, accessToken } = useOutletContext();
  console.log("받은 토큰 확인", accessToken);

  const activeClick = (method) => {
    setClick(method);
  };

  const hideContentPath = ["/boost"];
  const showContent = hideContentPath.includes(path);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        const response = await GetBoostedProjectInfo(project.id);
        const currentProject = response.result;
        const currentTitle = project.mainTitle;
        console.log("확인", currentTitle, project.id, currentProject);
        if (currentProject) {
          setProjectDetails(currentProject);
          setProjectName(currentTitle);
          setProjectId(project.id);
        } else {
          console.error("프로젝트를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("프로젝트 상세 정보를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchProjectDetails();
  }, [project.id]);

  // 후원 API 호출 함수
  const handleBoost = async () => {
    try {
      if (!amount || isNaN(amount) || Number(amount) <= 0) {
        alert("후원 금액을 올바르게 입력해주세요.");
        return;
      }

      if (!isLoggedIn || !accessToken) {
        alert("로그인이 필요합니다.");
        return;
      }

      const response = await PostBoostProject({
        projectId,
        amount: Number(amount),
        accessToken, // 토큰 전달
      });

      if (response.isSuccess) {
        alert("후원이 완료되었습니다!");
        navigate("/");
        // 이후 필요한 처리 추가 (예: 새 데이터 가져오기)
      } else {
        alert(`후원 실패: ${response.message}`);
      }
    } catch (error) {
      console.error("후원 요청 중 오류 발생:", error);
      alert("후원 요청에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="pj-detail-boost-container">
      {showContent !=
      (
        <div className="pj-detail-boost-banner">
          🔥현재&nbsp;
          {projectDetails ? (
            <div className="pj-detail-boost-num">
              {projectDetails.boostedUserCount}개의 기업
            </div>
          ) : (
            <div className="pj-detail-boost-num">0개의 기업</div>
          )}
          이 함께 후원 중
        </div>
      )}
      <div className="pj-detail-boost-main">
        {showContent ? (
          <>
            <div className="pj-boost-title">후원 정보 설정</div>
            <div className="pj-boost-name-box">
              후원자 명
              <input
                className="pj-boost-name-input"
                placeholder="10자 이내로 작성해주세요"
              ></input>
            </div>
            <div className="pj-boost-pay-method-container">
              후원 방식
              <div className="pj-pay-method-boxs-container">
                <div
                  className={`pj-pay-method-box${
                    click === "card" ? "active" : ""
                  }`}
                  onClick={() => activeClick("card")}
                >
                  💳 카드
                </div>
                <div
                  className={`pj-pay-method-box${
                    click === "won" ? "active" : ""
                  }`}
                  onClick={() => activeClick("won")}
                >
                  💵 계좌이체
                </div>
              </div>
              <div className="pj-boost-name-box">
                후원 금액
                <input
                  className="pj-boost-name-input"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="금액을 입력해주세요"
                ></input>
              </div>
              <div className="pj-lines"></div>
            </div>
          </>
        ) : (
          <div className="pj-detail-boost-main-title-container">
            <div className="pj-detail-boost-main-title">
              <div className="pj-detail-boost-main-title-h1">
                후원 기업 순위
              </div>
              <div className="pj-detail-boost-main-title-sub">
                후원 금액이 많은 순서로 구성하였습니다.
              </div>
            </div>
            <div
              className="pj-detail-boost-main-see-all"
              onClick={() => navigate("/")}
            >
              전체보기
            </div>
          </div>
        )}
        <BoostRank
          projectDetails={projectDetails}
          projectName={projectName}
          projectId={projectId}
          project={project}
          onClick={handleBoost}
          amount={amount}
        />
      </div>
    </div>
  );
};

export default ComBoost;
