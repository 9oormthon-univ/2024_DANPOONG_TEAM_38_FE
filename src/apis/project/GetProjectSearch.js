import axios from "axios";

const GetProjectSearch = async (keyword, page = 0) => {
  if (!keyword || keyword.length < 2) {
    throw new Error("검색어는 2글자 이상이어야 합니다.");
  }

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/search/${keyword}`,
      {
        params: { page },
      }
    );

    return response.data.result;
  } catch (error) {
    console.error("Failed to fetch project search data:", error);
    throw error;
  }
};

export default GetProjectSearch;
