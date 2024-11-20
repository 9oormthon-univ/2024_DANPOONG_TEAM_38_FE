import axios from "axios";

const GetBoostedProjectInfo = async (projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/boosted-info`,
      {
        params: { projectId },
      }
    );
    console.log("API 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }
};

export default GetBoostedProjectInfo;
