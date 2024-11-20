import axios from "axios";

const GetAllProject = async (projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/${projectId}` // Adjusted to include projectId in path
    );
    console.log("API 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default GetAllProject;
