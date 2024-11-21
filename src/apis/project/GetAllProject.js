// GetAllProject.js
import axios from "axios";

const GetAllProject = async (page = 0, size = 1) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/all`,
      {
        params: {
          request: JSON.stringify({
            page,
            size,
          }),
        },
      }
    );

    if (response.data.isSuccess) {
      console.log("프로젝트 조회 성공:", response.data.result.content);
      return response.data.result.content; // Return only the content array
    } else {
      console.error("프로젝트 조회 실패:", response.data.message);
      return []; // Return an empty array on failure
    }
  } catch (error) {
    console.error(
      "API 요청 오류:",
      error.response?.data?.message || error.message || error
    );
    throw error;
  }
};

export default GetAllProject;
