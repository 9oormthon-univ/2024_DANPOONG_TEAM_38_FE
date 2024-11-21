import React, {useEffect, useState} from "react";
import {ReactComponent as EditIcon} from "../../assets/myPage/EditIcon.svg";
import {ReactComponent as BlogLinkIcon} from "../../assets/myPage/BlogLinkIcon.svg";
import MyProject from "./components/MyProject";
import Proposal from "./components/Proposal";
import GetUserMyPage from "../../apis/myPage/GetUserMyPage";

const menuItems = [
    {key: 'myProject', label: '나의 프로젝트'},
    {key: 'interestProject', label: '관심 프로젝트'},
    {key: 'supportProject', label: '후원 프로젝트'},
    {key: 'myReview', label: '내 후기'},
    {key: 'proposal', label: '받은 제안서'},
];

const MyPage = () => {
    const [menu, setMenu] = useState('myProject');
    const [userInfo,setUserInfo] = useState(null);
    const type = sessionStorage.getItem("type");

    const filteredMenuItems = type === 'USER'
        ? menuItems.filter(item => item.key !== 'proposal')
        : menuItems;

    useEffect(() => {
        const GetUserInfo = async () => {
            try {
                const result = await GetUserMyPage();
                setUserInfo(result.result)
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        GetUserInfo();
    }, []);

    return (
        <div className='myPage-container'>
            <section className='flex gap-x-9'>
                <div>
                    <img className='myPage-userImage' src={userInfo?.image} alt="userImage"/>
                </div>
                <div className='flex justify-between flex-1'>
                    <div className='flex flex-col justify-around'>
                        <div>
                            <div className='myPage-nickname'>{userInfo?.name}</div>
                            <div className='myPage-level'>{userInfo?.tag}</div>
                        </div>
                        <a href="" className='myPage-blog-link'><BlogLinkIcon/><span>{userInfo?.link}</span></a>
                        <div className='flex gap-x-8 items-center'>
                            <div className='text-center'>
                                <div className='text-2xl mb-3'>팔로잉</div>
                                <div className='text-4xl font-bold font-Bruno'>{userInfo?.followingCount}</div>
                            </div>
                            <hr className='myPage-hr'/>
                            <div className='text-center'>
                                <div className='text-2xl mb-3'>팔로워</div>
                                <div className='text-4xl font-bold font-Bruno'>{userInfo?.followerCount}</div>
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
                {filteredMenuItems.map((item) => (
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
