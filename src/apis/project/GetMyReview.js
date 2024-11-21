import axios from "axios";
import React from "react";

const GetMyReview = async (projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/projects/${projectId}/reviews/my`
    );
    console.log(response.data); // 응답 데이터를 콘솔에 출력
    return response.data; // 응답 데이터를 반환
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default GetMyReview;
