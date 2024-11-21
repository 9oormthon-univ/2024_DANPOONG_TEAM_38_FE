import axios from "axios";

const GetComRanking = async (sortType) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/companies/ranking`,
      {
        params: { sortType },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default GetComRanking;
