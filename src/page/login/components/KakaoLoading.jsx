import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import GetCode from "../../../apis/login/GetCode";

const KakaoLoading = () => {
    const navigate = useNavigate();

    const GetToken = async (code) => {
        try {
            const result = await GetCode(code);
            const {accessToken, refreshToken} = result.data.result;

            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('refreshToken', refreshToken);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            GetToken(code);
        }
    }, []);

    return (
        <div className='text-center'>
            로딩중
        </div>
    );
};

export default KakaoLoading;