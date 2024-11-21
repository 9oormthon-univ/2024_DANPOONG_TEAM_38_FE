import axios from "axios";

// GetReview 함수에서 projectId와 reviewType을 매개변수로 받아서 API 호출
const GetReview = async (projectId, reviewType) => {
  try {
    // API 요청 URL에서 reviewType을 동적으로 추가
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/projects/${projectId}/reviews/${reviewType}`
    );

    console.log(response.data); // 응답 데이터를 콘솔에 출력
    return response.data; // 응답 데이터를 반환
  } catch (error) {
    console.error("후기 조회 실패:", error);
    throw error; // 오류 발생 시 예외 처리
  }
};

export default GetReview;
