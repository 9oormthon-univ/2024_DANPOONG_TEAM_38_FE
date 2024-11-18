import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginLogo from '../../../assets/login/LoginLogo.png';
import KakaoLogo from '../../../assets/login/KakaoLogo.png';
import {ReactComponent as FindUserIcon} from "../../../assets/login/FindUserIcon.svg";
import {ReactComponent as SignUpIcon} from "../../../assets/login/SignUpIcon.svg";

const LoginType = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state;

    const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=http://localhost:3000/login&response_type=code`;
    const [authorizationCode, setAuthorizationCode] = useState(null);

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            setAuthorizationCode(code);
            console.log(code);
        }
    }, []);

    const clickKakaoLogin = () => {
        window.location.href = KAKAO_LOGIN_URL;
    }

    return (
        <div className='loginType-container'>
            <h1 className='loginType-title'>{category === 'user' ? '개인' : '기업'} 로그인</h1>
            <section className='loginType-button-section'>
                <div>
                    <img className='loginType-logo-image' src={LoginLogo} alt="LoginLogo"/>
                </div>
                <div className='flex flex-col gap-y-5'>
                    {category === 'user' ?
                        <>
                            <button className='loginType-user-button' onClick={clickKakaoLogin}>
                                <div>
                                    <img src={KakaoLogo} alt=""/>
                                </div>
                                <span>카카오로 시작하기</span>
                            </button>
                            {/*<button className='loginType-user-button' onClick={()=>navigate('/signup')}>*/}
                            {/*    <SignUpIcon />*/}
                            {/*    <span>회원가입</span>*/}
                            {/*</button>*/}
                        </>
                        :
                        <>
                            <input type="text" placeholder='이메일' className='login-company-input-text'/>
                            <input type="text" placeholder='비밀번호' className='login-company-input-text'/>
                            <button className='loginType-company-button'>
                                로그인
                            </button>
                            <div className='flex ml-auto gap-x-7'>
                                <a href="/signup" className='login-company-a'>
                                    <SignUpIcon/>
                                    <span>회원가입</span>
                                </a>
                                <a href="" className='login-company-a'>
                                    <FindUserIcon/>
                                    <span>계정 정보 찾기</span>
                                </a>
                            </div>
                        </>
                    }
                </div>
            </section>
        </div>
    );
};

export default LoginType;