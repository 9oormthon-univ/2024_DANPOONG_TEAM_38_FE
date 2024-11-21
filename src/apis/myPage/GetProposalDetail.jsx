import axios from "axios";

const GetProposalDetail = async (proposalId) => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/proposal/${proposalId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default GetProposalDetail;