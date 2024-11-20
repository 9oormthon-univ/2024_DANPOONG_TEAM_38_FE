import axios from 'axios';

const PostCompanyLogout = async (email) => {

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/companies/logout?email=${email}`,
            {},
        );

        return response;
    } catch (error) {
        console.error(error);
    }
};

export default PostCompanyLogout;