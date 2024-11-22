import axios from "axios";

// CORS 오류 발생
const GetMyReview = async (projectId) => {
  const accessToken = sessionStorage.getItem("accessToken");
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/projects/${projectId}/reviews/my`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data); // 응답 데이터를 콘솔에 출력
    return response.data; // 응답 데이터를 반환
  } catch (error) {
    if (error.response.status === 401) {
      console.error("Access Token이 만료되었습니다. 갱신이 필요합니다.");
    }
    console.error(error);
    throw error;
  }
};

export default GetMyReview;
