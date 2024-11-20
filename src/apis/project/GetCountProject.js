import axios from "axios";

const GetCountProject = async (getType) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/count`,
      {
        params: {
          getType, // all 또는 new를 전달
        },
      }
    );
    return response.data; // 요청 성공 시 데이터를 반환
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};

export default GetCountProject;
