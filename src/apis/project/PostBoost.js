import axios from "axios";
const PostBoost = async (requestData) => {
  const { projectId, amount } = requestData;
  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("토큰이 존재하지 않습니다. 로그인 후 다시 시도해주세요.");
    throw new Error("인증되지 않은 유저입니다.");
  }

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/boost`,
      null, // POST 요청이지만 요청 본문은 queryString에 포함
      {
        params: {
          projectId: projectId,
          amount: amount,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "프로젝트 후원 중 에러 발생:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default PostBoost;
