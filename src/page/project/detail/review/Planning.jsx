import React, { useEffect, useState } from "react";
import GetProject from "../../../../apis/project/GetProject";

const Planning = ({ project }) => {
  const [projectDetails, setProjectDetails] = useState(null); // 프로젝트 상세 정보
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        if (!project || !project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        // GetProject API 호출, project.id를 전달
        const response = await GetProject(project.id);

        if (response && response.result) {
          const currentProject = response.result; // GetProject가 반환하는 데이터 처리
          console.log("이것좀봐", project.id, currentProject);
          setProjectDetails(currentProject);
        } else {
          console.error("프로젝트를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("프로젝트 상세 정보를 불러오는 데 실패했습니다.", error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchProjectDetails();
  }, [project]);

  if (loading) {
    return <div>프로젝트 정보를 불러오는 중...</div>; // 프로젝트 정보가 로드될 때까지 로딩 메시지 표시
  }

  if (!projectDetails) {
    return <div>프로젝트 상세 정보가 없습니다.</div>; // 프로젝트 정보가 없을 경우 표시
  }

  return (
    <div className="pj-plan-container">
      <div>
        <strong>1. 프로젝트 소개:</strong> {projectDetails.introduction}
      </div>
      <div>
        <strong>2. 목표:</strong> <br />
        {projectDetails.summary}
        <br />
        둘째, 소상공인의 월평균 매출을 20% 이상 증가시키는 것을 목표로 한다.
        <br />
        셋째, 플랫폼 런칭 후 1년 내 사용자 수 10,000명을 달성한다. 이를 통해
        지역 소상공인의 디지털 경쟁력을 강화하고, 지역 경제 활성화를 이루는 것을
        목표로 한다.
      </div>
      <div>
        <strong>3. 세부 실행 계획:</strong> <br />
        {projectDetails.scheduleDescription}
      </div>
      <div>
        <strong>4. 예산 설명:</strong> {projectDetails.budgetDescription}
      </div>
      <div>
        <strong>5. 기타:</strong> {projectDetails.teamDescription}
      </div>
    </div>
  );
};

export default Planning;
