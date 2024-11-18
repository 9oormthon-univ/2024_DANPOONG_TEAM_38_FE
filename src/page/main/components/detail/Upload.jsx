import React from "react";
import { ReactComponent as G1 } from "../../../../assets/component/upload/guid1.svg";
import { ReactComponent as G2 } from "../../../../assets/component/upload/guide2.svg";
import { ReactComponent as G3 } from "../../../../assets/component/upload/guide3.svg";
import { ReactComponent as G4 } from "../../../../assets/component/upload/guide4.svg";
import { ReactComponent as Next } from "../../../../assets/component/upload/next.svg";

const Upload = () => {
  return (
    <div className="upload-container">
      <div className="upload-title">Upload process</div>
      <div className="upload-content">
        크라우드유스에 프로젝트 업로드 시 거치게되는 과정입니다.
      </div>
      <div className="upload-guide">
        <G1 /> <Next />
        <G2 /> <Next />
        <G3 />
        <Next />
        <G4 />
      </div>
    </div>
  );
};

export default Upload;
