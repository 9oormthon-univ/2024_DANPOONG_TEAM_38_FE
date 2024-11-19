import React, {useState} from "react";
import MyPageUserImage from '../../assets/myPage/MyPageUserImage.jpg';
import {ReactComponent as EditIcon} from "../../assets/myPage/EditIcon.svg";
import {ReactComponent as BlogLinkIcon} from "../../assets/myPage/BlogLinkIcon.svg";
import MyProject from "./components/MyProject";
import Proposal from "./components/Proposal";

const menuItems = [
    {key: 'myProject', label: '나의 프로젝트'},
    {key: 'interestProject', label: '관심 프로젝트'},
    {key: 'supportProject', label: '후원 프로젝트'},
    {key: 'myReview', label: '내 후기'},
    {key: 'proposal', label: '받은 제안서'},
];

const MyPage = () => {
    const [menu, setMenu] = useState('myProject');

    return (
        <div className='myPage-container'>
            <section className='flex gap-x-9'>
                <div>
                    <img src={MyPageUserImage} alt="dummy"/>
                </div>
                <div className='flex justify-between flex-1'>
                    <div className='flex flex-col justify-around'>
                        <div>
                            <div className='myPage-nickname'>닉네임</div>
                            <div className='myPage-level'>직업 or 레벨 (ex.새싹투자자)</div>
                        </div>
                        <a href="" className='myPage-blog-link'><BlogLinkIcon/><span>naver.com</span></a>
                        <div className='flex gap-x-4 items-center'>
                            <div className='text-center'>
                                <div className='text-2xl mb-3'>팔로잉</div>
                                <div className='text-4xl font-bold'>185</div>
                            </div>
                            <hr/>
                            <div className='text-center'>
                                <div className='text-2xl mb-3'>팔로워</div>
                                <div className='text-4xl font-bold'>69</div>
                            </div>
                        </div>
                    </div>
                    <div className='myPage-edit-button'>
                        <a href="/myPage/edit" className='flex gap-x-3 items-center'>
                            <EditIcon/>
                            <span>프로필 편집</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className='mt-28 mb-16 flex gap-x-12'>
                {menuItems.map((item) => (
                    <button
                        key={item.key}
                        className={`myPage-menu ${menu === item.key ? 'active' : ''}`}
                        onClick={() => setMenu(item.key)}
                    >
                        {item.label}
                    </button>
                ))}
            </section>
            <section>
                {menu === 'myProject' && <MyProject/>}
                {menu === 'interestProject' && <div>관심 프로젝트 내용</div>}
                {menu === 'supportProject' && <div>후원 프로젝트 내용</div>}
                {menu === 'myReview' && <div>내 후기 내용</div>}
                {menu === 'proposal' && <Proposal/>}
            </section>
        </div>
    );
};

export default MyPage;
