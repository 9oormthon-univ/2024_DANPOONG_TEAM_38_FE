import React, { useEffect, useState } from "react";
import GetProject from "../../../../apis/project/GetProject";

const Planning = ({ project }) => {
  const [projectDetails, setProjectDetails] = useState(null); // 프로젝트 상세 정보
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        // GetProject API 호출, project.id를 전달
        const response = await GetProject(project.id);
        const currentProject = response.result; // GetProject가 반환하는 데이터 처리
        console.log("이것좀봐", project.id, currentProject);
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

  if (!projectDetails) {
    return <div>프로젝트 정보를 불러오는 중...</div>; // 프로젝트 정보가 로드될 때까지 로딩 메시지 표시
  }

  return (
    <div className="pj-plan-container">
      {/*  */}
      <br />
      <h1> 연동 후 ui 수정 필요</h1>
      1.프로젝트 소개:{projectDetails.introduction}
      2. 목표 <br />
      {projectDetails.summary}
      <br />
      둘째, 소상공인의 월평균 매출을 20% 이상 증가시키는 것을 목표로 한다.{" "}
      <br />
      셋째, 플랫폼 런칭 후 1년 내 사용자 수 10,000명을 달성한다. 이를 통해 지역
      소상공인의 디지털 경쟁력을 강화하고, 지역 경제 활성화를 이루는 것을 목표로
      한다.
      <br />
      3. 세부 실행 계획 <br />
      {projectDetails.scheduleDescription}
      <br />
      4.예산 설명
      {projectDetails.budgetDescription}
      5.기타
      {projectDetails.teamDescription}
    </div>
  );
};

export default Planning;
