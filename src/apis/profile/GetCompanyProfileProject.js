import axios from 'axios';

const GetCompanyProfileProject = async (userId, page) => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/${userId}/project`, {
            params: {page: page},
        });

        return response;
    } catch (error) {

        console.error(error);
    }
};

export default GetCompanyProfileProject;