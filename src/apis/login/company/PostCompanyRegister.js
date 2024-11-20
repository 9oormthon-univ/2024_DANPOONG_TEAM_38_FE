import axios from 'axios';

const PostCompanyRegister = async (formData) => {
    const {businessNumber, email, password, confirmPassword} = formData;

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/companies/register`, {
            email: email,
            password: password,
            businessNumber: businessNumber,
        });

        return response.status;
    } catch (error) {
        console.error(error);
    }
};

export default PostCompanyRegister;