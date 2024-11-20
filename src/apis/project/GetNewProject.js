import axios from "axios";

const GetNewProject = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/new`
    );
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("프로젝트 조회 실패:", error);
    throw error; // 에러 처리
  }
};

export default GetNewProject;
