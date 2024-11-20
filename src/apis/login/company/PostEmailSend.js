import axios from 'axios';

const PostBusinessNumber = async (email) => {

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/send-email?email=${email}`,
            {},
        );

        return response;
    } catch (error) {
        console.error(error);
    }
};

export default PostBusinessNumber;