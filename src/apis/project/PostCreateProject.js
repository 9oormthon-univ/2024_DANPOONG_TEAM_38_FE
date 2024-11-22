import axios from "axios";

const createProject = async (requestData) => {
  const {
    mainTitle,
    subTitle,
    category,
    region,
    account,
    budgetDescription,
    scheduleDescription,
    teamDescription,
    targetAmount,
    introduction,
    images, // 이미지 배열
    startDate,
    endDate,
    summary,
  } = requestData;

  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("토큰이 존재하지 않습니다. 로그인 후 다시 시도해주세요.");
    throw new Error("인증되지 않은 유저입니다.");
  }

  // FormData 생성
  const formData = new FormData();
  formData.append("mainTitle", mainTitle);
  formData.append("subTitle", subTitle);
  formData.append("category", category);
  formData.append("region", region);
  formData.append("account", account);
  formData.append("budgetDescription", budgetDescription);
  formData.append("scheduleDescription", scheduleDescription);
  formData.append("teamDescription", teamDescription);
  formData.append("targetAmount", targetAmount);
  formData.append("introduction", introduction);
  formData.append("startDate", startDate);
  formData.append("endDate", endDate);
  formData.append("summary", summary);

  // 이미지 배열을 폼 데이터에 추가
  if (images && Array.isArray(images)) {
    images.forEach((image, index) => {
      formData.append("images", image); // 배열을 images로 append
    });
  }

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/project`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "프로젝트 생성 중 에러 발생:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default createProject;
