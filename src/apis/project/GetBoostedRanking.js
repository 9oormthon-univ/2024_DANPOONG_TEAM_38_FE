import axios from "axios";

const GetBoostedRanking = async (projectId, page = 0) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/boosted-ranking`,
      {
        params: { projectId, page },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("Failed to fetch boosted ranking data:", error);
    throw error;
  }
};

export default GetBoostedRanking;
