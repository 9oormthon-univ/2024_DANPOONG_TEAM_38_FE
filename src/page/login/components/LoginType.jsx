import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import LoginLogo from '../../../assets/login/LoginLogo.png';
import KakaoLogo from '../../../assets/login/KakaoLogo.png';
import {ReactComponent as FindUserIcon} from "../../../assets/login/FindUserIcon.svg";
import {ReactComponent as SignUpIcon} from "../../../assets/login/SignUpIcon.svg";
import PostCompanyLogin from "../../../apis/login/company/PostCompanyLogin";

const LoginType = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state;
    const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=http://localhost:3000/api/auth/kakao/login&response_type=code`;

    const clickKakaoLogin = () => {
        window.location.href = KAKAO_LOGIN_URL;
    }

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const InputChange = (e) => {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const ClickSubmit = async () => {
        const {email, password} = formData;

        if (!email || !password) {
            alert('모든 필드를 작성해주세요!');
            return;
        }

        const result = await PostCompanyLogin(formData);
        if (result?.accessToken) {
            sessionStorage.setItem('email', email);
            alert('로그인에 되었습니다.');
            navigate('/');
        } else {
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
    };

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
                            <input type="email" id="email" name="email" value={formData.email}
                                   onChange={InputChange} placeholder='이메일' className='login-company-input-text'/>
                            <input type="password" id="password" name="password" value={formData.password}
                                   onChange={InputChange} placeholder='비밀번호' className='login-company-input-text'/>
                            <button className='loginType-company-button' onClick={ClickSubmit}>
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