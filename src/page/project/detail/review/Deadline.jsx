import React from "react";

import { ReactComponent as Share } from "../../../../assets/component/project/share.svg";
import { ReactComponent as Logo } from "../../../../assets/component/project/logo.svg";

const Deadline = () => {
  const content = `
안녕하세요! 😊 오늘은 지난 한 달간 진행했던 **[프로젝트명]**의 마무리 소식을 전하려고 합니다.긴 여정을 끝내고 이렇게 마침표를 찍으니 시원섭섭한 기분이 드네요. 이 프로젝트를 통해 성장한 점, 느낀 점, 그리고 아쉬운 점들을 정리해보려 합니다.

🗓 프로젝트 개요
이번 프로젝트는 [프로젝트의 목적/내용]을 목표로 시작되었습니다.초반에는 [시작 배경, 주요 과제, 목표 설정]에 대한 고민이 많았는데, 덕분에 방향성을 명확히 잡을 수 있었습니다.

  `;

  return (
    // 마감 후기 내용 없는 조건 수정 필요
    <div className="pj-deadline-container">
      {content && content.trim() ? (
        <>
          <div className="pj-deadline-title-container">
            {/* 마감후기 작성 내용 API 연동 필요 */}
            <div className="pj-deadline-title">
              마감후기타이틀입니다
              <div className="pj-deadline-sub-title">0000.00.00(0)</div>
            </div>
            <div className="pj-share-icon">
              <Share />
            </div>
          </div>
          <div className="pj-deadline-line"></div>
          {/* 마감 후기 작성 내용 API */}
          <div className="pj-deadline-content">{content}</div>
        </>
      ) : (
        <div className="pj-deadline-non-content">
          <Logo />
          등록된 마감 후기가 없습니다.
        </div>
      )}
    </div>
  );
};

export default Deadline;
