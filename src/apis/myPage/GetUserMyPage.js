import axios from 'axios';

const GetUserMyPage = async () => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/mypage`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response)
        return response.data;
    } catch (error) {
        if (error.response.status === 401) {
            console.error('Access Token이 만료되었습니다. 갱신이 필요합니다.');
        }
        console.error(error);
    }
};

export default GetUserMyPage;