import React, {useState} from 'react';
import ProfileDummy from '../../assets/profile/ProfileDummy.png';
import {ReactComponent as BlogLinkIcon} from "../../assets/myPage/BlogLinkIcon.svg";
import ProfileMyProject from "./components/ProfileMyProject";

const menuItems = [
    {key: 'profileMyProject', label: '사용자의 프로젝트'},
    {key: 'likeProject', label: '좋아요한 프로젝트'},
];

const Profile = () => {
    const [menu, setMenu] = useState('profileMyProject');

    return (
        <div className='profile-container'>
            <div>
                <div><img className='profile-image' src={ProfileDummy} alt="dummy"/></div>
                <div className='profile-name'>김동준</div>
                <div className='profile-job'>사업가</div>
                <a href="" className='profile-blog-link'><BlogLinkIcon/><span>naver.com</span></a>
                <div className='flex gap-x-8 items-center'>
                    <div className='text-center'>
                        <div className='text-2xl mb-3'>팔로잉</div>
                        <div className='text-4xl font-bold font-Bruno'>185</div>
                    </div>
                    <hr/>
                    <div className='text-center'>
                        <div className='text-2xl mb-3'>팔로워</div>
                        <div className='text-4xl font-bold font-Bruno'>69</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='profile-introduce'>
                    <p className='font-semibold text-[27px] mb-6'>다양한 프로젝트를 다채롭게 만들어나가는 청년 유저 김동준입니다.</p>
                    <p className='text-2xl'>안녕하세요! 다양한 프로젝트를 다채롭게 만들어나가는 청년 유저 000입니다.
                        앞으로도 열심히 하겠습니다😃</p>
                </div>
                <section className='flex gap-x-12 mt-14 mb-16'>
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            className={`profile-menu ${menu === item.key ? 'active' : ''}`}
                            onClick={() => setMenu(item.key)}
                        >
                            {item.label}
                        </button>
                    ))}
                </section>
                <section>
                    {menu === 'profileMyProject' && <ProfileMyProject/>}
                    {menu === 'likeProject' && <div>좋아요한 프로젝트 내용</div>}
                </section>
            </div>
        </div>
    );
};

export default Profile;