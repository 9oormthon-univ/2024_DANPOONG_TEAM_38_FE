import React, { useState, useEffect } from "react";
import { ReactComponent as Left } from "../../../assets/component/project/left.svg";
import { ReactComponent as Right } from "../../../assets/component/project/right.svg";
import GetAllProject from "../../../apis/project/GetAllProject";

const Show = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
  const [projectDetails, setProjectDetails] = useState(null); // 프로젝트 상세 정보

  // 이미지 배열로 설정
  const images = Array.isArray(project?.image)
    ? project.image
    : [project?.image];

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        if (!project.id) {
          console.error("프로젝트 ID가 없습니다.");
          return;
        }

        // GetAllProject API 호출, project.id를 전달
        const response = await GetAllProject(project.id);
        const currentProject = response.result; // GetAllProject가 반환하는 데이터 처리
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
  }, [project.id]); // project.id가 변경될 때마다 실행

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="pj-detail-show-container">
      {projectDetails ? (
        <>
          <div className="pj-detail-show-title">{projectDetails.mainTitle}</div>
          <div className="pj-detail-show-img-slice">
            {/* 왼쪽 버튼 */}
            <Left onClick={handleBack} className="pj-detail-show-left-btn" />
            {/* 현재 이미지를 표시 */}
            <div className="pj-detail-show-img-section">
              <img
                src={images[currentIndex]} // currentIndex를 사용하여 이미지 URL을 동적으로 설정
                alt={`Slide ${currentIndex + 1}`}
                className="pj-detail-show-image"
              />
            </div>
            {/* 오른쪽 버튼 */}
            <Right onClick={handleNext} className="pj-detail-show-right-btn" />
          </div>
          <div className="pj-detail-show-sub-title">
            {projectDetails.subTitle}
          </div>
        </>
      ) : (
        <div>프로젝트 상세 정보를 불러오는 중...</div>
      )}
    </div>
  );
};

export default Show;
