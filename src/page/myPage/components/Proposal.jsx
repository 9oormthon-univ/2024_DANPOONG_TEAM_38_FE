import React from 'react';
import {ReactComponent as BackArrowIcon} from '../../../assets/myPage/BackArrowIcon.svg';
import DummyImg2 from '../../../assets/myPage/DummyImg2.png';

const Proposal = () => {
    return (
        <div className='proposal-container'>
            <div className='proposal-box'>
                <div className='flex gap-x-7 justify-between'>
                    <div className='flex gap-x-7'>
                        <div className='text-center'>
                            <div className='overflow-hidden'><img className='proposal-profile-image' src={DummyImg2} alt=""/></div>
                            <span className='proposal-user-name'>김동준</span>
                        </div>
                        <div className='proposal-content'>
                            <span className='proposal-date'>2024.11.17 15:30</span>
                            <p className='proposal-title'>안녕하세요 000님, 저는 청년 사업가 김동준입니다.</p>
                            <p className='proposal-detail'>안녕하세요. 저는 지금 청년 지역 프로제트를 진행중인 차에 000님의 후원 프로젝트를 보고 관심을 갖게되어
                                연락 드렸습니다. 다름이 아니라 저희가 현재 2개월 간 진행하</p>
                        </div>
                    </div>
                    <div className='scale-x-[-1] m-auto'>
                        <BackArrowIcon/>
                    </div>
                </div>
                <div className='flex gap-x-3 justify-end mt-3'>
                    <button className='proposal-button'>수락하기</button>
                    <button className='proposal-button'>거절하기</button>
                </div>
            </div>
        </div>
    );
};

export default Proposal;