import React, {useState} from 'react';
import SignupStepImage from '../../../assets/login/SignupStepImage.png';
import CompanyUser from '../../../assets/login/CompanyUser.png';
import {useNavigate} from "react-router-dom";
import PostCompanyRegister from "../../../apis/login/company/PostCompanyRegister";

const SignupCompany = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        businessNumber: '',
        email: '',
        password: '',
        confirmPassword:'',
    });

    const InputChange = (e) => {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const ClickSubmit =async () => {
        const {businessNumber, email, password, confirmPassword} = formData;

        if (!businessNumber || !email || !password || !confirmPassword) {
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
                    <input type="email" id="email" name="email" value={formData.email} onChange={InputChange}
                           placeholder='이메일'/>
                    <input type="text" id="" placeholder='코드 입력'/>
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