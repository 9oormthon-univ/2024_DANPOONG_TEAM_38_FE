import axios from 'axios';

const PostCompanyLogin = async (formData) => {
    const {email, password} = formData;

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/companies/login`, {
            email: email,
            password: password,
        });

        const {accessToken, refreshToken} = response.data;

        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        sessionStorage.setItem('type', 'COMPANY');

        return {accessToken, refreshToken};
    } catch (error) {
        console.error(error);
    }
};

export default PostCompanyLogin;