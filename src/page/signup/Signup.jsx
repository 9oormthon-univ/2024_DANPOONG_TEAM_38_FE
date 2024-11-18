import React from 'react';
import CommonUser from '../../assets/login/CommonUser.png';
import CompanyUser from '../../assets/login/CompanyUser.png';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className='signup-container'>
            <h1 className='signup-title'>회원가입</h1>
            <section className='signup-button-section'>
                <button className='signup-button' onClick={() => navigate("/login")}>
                    <img className='signup-button-image' src={CommonUser} alt="CommonUser"/>
                    <span>일반 사용자</span>
                </button>
                <button className='signup-button'>
                    <img className='signup-button-image' src={CompanyUser} alt="CommpanyUser"/>
                    <span>기업 후원자</span>
                </button>
            </section>
            <footer className='signup-footer'>
                <a href="">About Us</a>
                <a href="">Contact</a>
                <a href="">Terms of Use</a>
            </footer>
        </div>
    );
};

export default Signup;