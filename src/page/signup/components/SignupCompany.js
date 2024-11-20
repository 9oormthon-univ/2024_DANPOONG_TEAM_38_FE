import React, {useState} from 'react';
import SignupStepImage from '../../../assets/login/SignupStepImage.png';
import CompanyUser from '../../../assets/login/CompanyUser.png';
import {useNavigate} from "react-router-dom";
import PostCompanyRegister from "../../../apis/login/company/PostCompanyRegister";
import PostBusinessNumber from "../../../apis/login/company/PostBusinessNumber";
import PostEmailSend from "../../../apis/login/company/PostEmailSend";
import PostVerifyEmail from "../../../apis/login/company/PostVerifyEmail";

const SignupCompany = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        businessNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        code: '',
    });

    const InputChange = (e) => {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const ClickSubmit = async () => {
        const {businessNumber, email, password, confirmPassword, code} = formData;

        if (!businessNumber || !email || !password || !confirmPassword || !code) {
            alert('모든 필드를 작성해주세요!');
            return;
        }

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다!');
            return;
        }

        const result = await PostCompanyRegister(formData);
        if (result === 200) {
            alert('"기업 회원가입이 완료되었습니다."');
            navigate('/');
        } else {
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const clickBusinessNumber = async () => {
        const result = await PostBusinessNumber(formData.businessNumber);
        console.log(result);
    }

    const clickSendEmail = async () => {
        const result = await PostEmailSend(formData.email);
        if (result.status === 200) {
            alert('인증번호가 전송되었습니다.')
        }
    }

    const clickVerifyEmail = async () => {
        const result = await PostVerifyEmail(formData.email, formData.code);
        alert(result.data);
    }

    return (
        <div className='signup-company-container'>
            <div>
                <img src={SignupStepImage} alt="SignupStepImage"/>
            </div>
            <section className='flex gap-x-40 items-center'>
                <div>
                    <img className='signup-company-image' src={CompanyUser} alt="CommpanyUser"/>
                </div>
                <div className='flex flex-col gap-y-5'>
                    <input type="text" id="businessNumber" name="businessNumber" value={formData.businessNumber}
                           onChange={InputChange} placeholder='사업자 번호'/>
                    <button onClick={clickBusinessNumber}>사업자 인증</button>

                    <input type="email" id="email" name="email" value={formData.email} onChange={InputChange}
                           placeholder='이메일'/>
                    <button onClick={clickSendEmail}>이메일 인증</button>
                    <input type="text" id="code" name="code" value={formData.code} onChange={InputChange}
                           placeholder='코드 입력'/>
                    <button onClick={clickVerifyEmail}>인증확인</button>

                    <input type="password" id="password" name="password" value={formData.password}
                           onChange={InputChange} placeholder='비밀번호 입력'/>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword}
                           onChange={InputChange} placeholder='비밀번호를 한번 더 작성해주세요'/>
                    <div className='flex gap-x-4'>
                        <button className='signup-company-button' onClick={() => navigate('/signup')}>취소</button>
                        <button className='signup-company-button' onClick={ClickSubmit}>가입 완료</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SignupCompany;