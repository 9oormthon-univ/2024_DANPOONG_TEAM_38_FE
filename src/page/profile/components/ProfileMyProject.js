import React from 'react';
import MyProjectDummy from "../../../assets/myPage/myProject/MyProjectDummy.jpg";
import BackArrowIcon from "../../../assets/myPage/BackArrowIcon.svg";

const ProfileMyProject = () => {
    return (
        <div className='profile-myProject-container'>
            <div className='profile-myProject-box'>
                <div><img className='profile-myProject-image' src={MyProjectDummy} alt="dummy"/></div>
                <div className='profile-myProject-content'>
                    <span className='profile-myProject-date'>2024.11.04-2024.11.17</span>
                    <p className='profile-myProject-title'>나만의 소리를 담아내
                        감성으로 풀어내는 레코드 판</p>
                    <p className='profile-myProject-subTitle'>레코트판에 나만의 소리를 담아내는 프로젝트로 나만의 특별한 기록지를 만들어낼 수 있습니다.</p>
                    <a href="" className='profile-myProject-back-button'><img src={BackArrowIcon} alt="backIcon"/></a>
                </div>
            </div>
        </div>
    );
};

export default ProfileMyProject;