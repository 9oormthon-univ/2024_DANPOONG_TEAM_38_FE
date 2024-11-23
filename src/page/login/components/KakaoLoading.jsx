import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import GetCode from "../../../apis/login/GetCode";
import  Player  from 'lottie-react';
import LoadingLottie from '../../../assets/LoadingLottie.json';

const KakaoLoading = () => {
    const navigate = useNavigate();

    const GetToken = async (code) => {
        try {
            const result = await GetCode(code);
            const {accessToken, refreshToken} = result.data.result;

            sessionStorage.setItem('type', 'USER');
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('refreshToken', refreshToken);
            alert('로그인 되었습니다.');
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
        <div className='flex items-center justify-center'>
            <Player
                autoplay
                loop
                animationData={LoadingLottie}
                style={{height: '300px', width: '300px'}}
            />
        </div>
    );
};

export default KakaoLoading;