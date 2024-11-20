import React, { useEffect, useState } from "react";
import MoreDetail from "../../MoreDetail";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";
import GetNewProject from "../../../../apis/project/GetNewProject";

const ProjectMore = () => {
  const navigate = useNavigate();
  const [newProjects, setNewProjects] = useState([]); // 초기값을 빈 배열로 설정

  const fetchNewProject = async () => {
    try {
      const newProject = await GetNewProject();
      setNewProjects(newProject.result); // 'result'를 사용하여 프로젝트 데이터를 설정
    } catch (error) {
      console.error("프로젝트 수 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchNewProject();
  }, []); // 의존성 배열에 빈 배열을 넣어 컴포넌트가 마운트될 때 한 번만 실행되게 함

  const detailHandler = (project) => {
    // 프로젝트 상세페이지로 이동하며, 해당 프로젝트 정보 전달
    navigate("/detail", { state: { project } });
  };

  return (
    <div className="more-container">
      <div className="more-container-box">
        {/* 프로젝트 더보기 눌렀을때 프로젝트 페이지랑 연동 필요 */}
        {/* 신규 등록 조회 API 연동*/}
        <MoreDetail
          title={"What's up"}
          content={
            "신규 등록된 프로젝트를 확인하고, 원하는 프로젝트에 후원해보세요!"
          }
          btn={"프로젝트 더보기"}
          onClick={() => navigate("/list")} // 프로젝트 더보기 버튼 클릭 시 /list로 이동
        />
        <div className="more-preview-container">
          {/* newProjects가 존재하는 경우만 렌더링 */}
          {newProjects.length > 0 ? (
            newProjects.map((project) => (
              <Preview
                key={project.id}
                image={project.image}
                title={project.mainTitle}
                category={project.category}
                region={project.region}
                progressPeriod={project.progressPeriod}
                progressRate={project.progressRate}
                achievedAmount={project.achievedAmount}
                onClick={() => detailHandler(project)} // 클릭 시 해당 프로젝트 정보 넘기기
              />
            ))
          ) : (
            <p>프로젝트가 없습니다.</p> // 데이터가 없을 경우 표시
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectMore;
