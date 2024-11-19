import React, {useState} from 'react';
import MyProjectDummy from '../../../assets/myPage/myProject/MyProjectDummy.jpg';
import CategoryDummy from '../../../assets/myPage/myProject/CategoryDummy.svg';
import {ReactComponent as Step0} from "../../../assets/myPage/myProject/Step0.svg";
import {ReactComponent as Step1} from "../../../assets/myPage/myProject/Step1.svg";
import {ReactComponent as Step2} from "../../../assets/myPage/myProject/Step2.svg";
import {ReactComponent as Step3} from "../../../assets/myPage/myProject/Step3.svg";

const StepMap = [
    {step: 0, title: '작성', img: <Step0/>},
    {step: 1, title: '심사', img: <Step1/>},
    {step: 2, title: '펀딩', img: <Step2/>},
    {step: 3, title: '완료', img: <Step3/>}
];

const MyProject = () => {
    const [step, setStep] = useState(3);

    return (
        <div className='myProject-container'>
            <div className='myProject-box'>
                <div><img className='myProject-image' src={MyProjectDummy} alt="dummy"/></div>
                <div className='myProject-content'>
                    <div>
                        <span className='myProject-date'>2024.11.08-2024.12.12</span>
                        <div className='flex justify-between'>
                            <p className='myProject-title'>다양한 예술 작품을 감상하고 아트 전시회에 전시까지 가능한 프로젝트</p>
                            <div>
                                <img src={CategoryDummy} alt="dummy"/>
                                <span>미술</span>
                            </div>
                        </div>
                        <div className='myProject-progress'>
                            <div className='progress-steps'>
                                {StepMap.map((index) => (
                                    <div>
                                        <div
                                            key={index.step}
                                            className={`step ${index.step <= step ? 'active' : ''}`}
                                        >
                                            {index.img}
                                        </div>
                                        <span style={{color: `${index.step <= step ? '#00C78C' : '#C5EBE0'}`}}>{index.title}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='myProject-progress-gauge' style={{width: `${(step / 3) * 100}%`}}></div>
                        </div>
                    </div>
                    <div className='flex gap-x-3 justify-end'>
                        <button className='myProject-button'>관리하기</button>
                        <button className='myProject-button'>삭제하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;