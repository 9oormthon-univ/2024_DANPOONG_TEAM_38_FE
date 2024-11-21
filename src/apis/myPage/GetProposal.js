import axios from "axios";

const GetProposal = async (page) => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/proposal`, {
            params: {page: page},
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}

export default GetProposal;