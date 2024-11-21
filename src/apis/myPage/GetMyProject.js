import axios from 'axios';
// 로그인한 유저에 프로젝트들 조회
const GetMyProject = async () => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/project/user-projects`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response;
    } catch (error) {
        if (error.response.status === 401) {
            console.error('Access Token이 만료되었습니다. 갱신이 필요합니다.');
        }
        console.error(error);
    }
};

export default GetMyProject;