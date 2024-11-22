import axios from 'axios';

const PostProposal = async (companyId, formData) => {
    const {title, content, file} = formData;
    const accessToken = sessionStorage.getItem('accessToken');
    const formDataToSend = new FormData();
    formDataToSend.append('companyId', companyId);
    formDataToSend.append('title', title);
    formDataToSend.append('content', content);
    formDataToSend.append('file', file) ;

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/proposal`,
            formDataToSend,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        return response;
    } catch (error) {
        console.error(error);
    }
};

export default PostProposal;