import axios from 'axios';

const DeleteKakaoLogout = async () => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/auth/kakao/logout`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response)
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default DeleteKakaoLogout;