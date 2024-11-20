import axios from 'axios';

const PostBusinessNumber = async (businessNumber) => {

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/business/verify?businessNumber=${businessNumber}`,
            {},
        );

        return response;
    } catch (error) {
        console.error(error);
    }
};

export default PostBusinessNumber;