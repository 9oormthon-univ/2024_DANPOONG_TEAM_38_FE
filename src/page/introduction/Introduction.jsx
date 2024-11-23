import React from "react";
import IntroductionImg from "../../assets/introduction/Introduction.jpg";
import {ReactComponent as IntroArrowIcon} from "../../assets/introduction/IntroArrowIcon.svg";
import {ReactComponent as LoginIcon} from "../../assets/introduction/LoginIcon.svg";
import {useNavigate} from "react-router-dom";

const Introduction = () => {
    const navigate = useNavigate();

    return (
        <div className='introduction-container'>
            <img src={IntroductionImg} alt="introduction" className='mb-20'/>
            <button className='go-to-project' onClick={() => navigate("/list")}>
                프로젝트 보러가기
                <IntroArrowIcon/>
            </button>
            <button className='go-to-login' onClick={() => navigate("/login")}>
                로그인
                <LoginIcon/>
            </button>
            <button className='go-to-home' onClick={() => navigate('/')}>

            </button>
        </div>
    );
};

export default Introduction;
