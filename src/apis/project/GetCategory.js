import axios from "axios";

const GetCategory = async (category) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/category/${category}`
    );
    return response.data.result;
  } catch (error) {
    console.error("Failed to fetch projects by category:", error);
    throw error;
  }
};

export default GetCategory;
