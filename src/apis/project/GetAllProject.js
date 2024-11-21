import axios from "axios";

const GetAllProject = async (page = 0, size = 1, sort = ["createdAt"]) => {
  try {
    // GET 요청 전송
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/all`,
      {
        params: {
          page, // 페이지 번호
          size, // 페이지 크기
          sort, // 정렬 기준
        },
      }
    );

    // 응답 데이터 처리
    if (response.data.isSuccess) {
      console.log("프로젝트 조회 성공:", response.data.result.content);
      return {
        content: response.data.result.content, // 프로젝트 데이터
        totalPages: response.data.result.totalPages, // 전체 페이지 수
        totalElements: response.data.result.totalElements, // 전체 항목 수
      };
    } else {
      console.error("프로젝트 조회 실패:", response.data.message);
      return null; // 실패 시 null 반환
    }
  } catch (error) {
    console.error(
      "API 요청 오류:",
      error.response?.data?.message || error.message || error
    );
    throw error;
  }
};

export default GetAllProject;
