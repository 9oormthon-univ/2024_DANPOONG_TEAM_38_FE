import axios from 'axios';

const PostCompanyLogin = async (formData) => {
    const {email, password} = formData;

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/companies/login`, {
            email: email,
            password: password,
        });

        const {accessToken, refreshToken} = response.data;

        return {accessToken, refreshToken};
    } catch (error) {
        console.error(error);
    }
};

export default PostCompanyLogin;