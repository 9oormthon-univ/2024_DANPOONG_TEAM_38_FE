import axios from 'axios';

const GetCompanyBoost = async (userId, page) => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/boost/${userId}/boosts`, {
            params: {page: page},
        });

        return response;
    } catch (error) {

        console.error(error);
    }
};

export default GetCompanyBoost;