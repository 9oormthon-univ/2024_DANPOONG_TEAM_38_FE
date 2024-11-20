import axios from 'axios';

const GetPost = async (code) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/kakao/login`, {
            params: {code: code},
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default GetPost;