import axios from 'axios';

const GetUserProfile = async (peerId) => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/${peerId}/profile`);

        return response.data;
    } catch (error) {

        console.error(error);
    }
};

export default GetUserProfile;