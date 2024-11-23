import React, { useEffect, useState } from "react";
import MoreDetail from "../../MoreDetail";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";
import GetNewProject from "../../../../apis/project/GetNewProject";

const ProjectMore = ({ setRecentImage }) => {
  // setRecentImage props 추가
  const navigate = useNavigate();
  const [newProjects, setNewProjects] = useState([]);

  const fetchNewProject = async () => {
    try {
      const newProject = await GetNewProject();
      setNewProjects(newProject.result);
    } catch (error) {
      console.error("프로젝트 수 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchNewProject();
  }, []);

  const detailHandler = (project) => {
    navigate("/detail", { state: { project } });
  };

  return (
    <div className="more-container">
      <div className="more-container-box">
        <MoreDetail
          title={"What's up"}
          content={
            "신규 등록된 프로젝트를 확인하고, 원하는 프로젝트에 후원해보세요!"
          }
          btn={"프로젝트 더보기"}
          onClick={() => navigate("/list")}
        />
        <div className="more-preview-container">
          {newProjects?.length > 0 ? (
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
                onClick={() => {
                  detailHandler(project);
                  setRecentImage(project.image); // 이미지 클릭 시 최근 본 이미지 상태 변경
                }}
              />
            ))
          ) : (
            <p>프로젝트가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectMore;
