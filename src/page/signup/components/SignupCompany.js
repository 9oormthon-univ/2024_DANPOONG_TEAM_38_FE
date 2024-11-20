import React from 'react';
import SignupStepImage from '../../../assets/login/SignupStepImage.png';
import CompanyUser from '../../../assets/login/CompanyUser.png';

const SignupCompany = () => {
    return (
        <div className='signup-company-container'>
            <div>
                <img src={SignupStepImage} alt="SignupStepImage"/>
            </div>
            <section className='flex gap-x-40 items-center'>
                <div>
                    <img className='signup-company-image' src={CompanyUser} alt="CommpanyUser"/>
                </div>
                <form action="">
                    <div className='flex flex-col gap-y-5'>
                        <input type="text" placeholder='사업자 번호'/>
                        <input type="email" placeholder='이메일'/>
                        <input type="text" placeholder='코드 입력'/>
                        <input type="password" placeholder='비밀번호 입력'/>
                        <input type="password" placeholder='비밀번호를 한번 더 작성해주세요'/>
                        <div className='flex gap-x-4'>
                            <button className='signup-company-button'>취소</button>
                            <button className='signup-company-button'>가입 완료</button>
                        </div>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default SignupCompany;