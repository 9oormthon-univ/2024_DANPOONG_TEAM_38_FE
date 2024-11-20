import React from 'react';
import BackArrowIcon from '../../assets/myPage/BackArrowIcon.svg';

const MyPageEdit = () => {
    return (
        <div className='myPageEdit-container'>
            <a href="/myPage" className='myPageEdit-back-button'><img src={BackArrowIcon} alt="backIcon"/><span>마이페이지</span></a>
            대충 프로필 편집기능
        </div>
    );
};

export default MyPageEdit;