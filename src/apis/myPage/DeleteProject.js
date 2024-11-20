import axios from 'axios';

const DeleteProject = async (projectId) => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/project/${projectId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response;
    } catch (error) {
        console.error(error);
    }
};

export default DeleteProject;