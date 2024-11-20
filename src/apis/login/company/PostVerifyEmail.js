import axios from 'axios';

const PostVerifyEmail = async (email, code) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/verify-email?email=${email}&code=${code}`,
            {},
        );

        return response;
    } catch (error) {
        console.error(error);
    }
};

export default PostVerifyEmail;