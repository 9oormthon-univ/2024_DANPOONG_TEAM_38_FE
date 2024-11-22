import React, {useEffect, useState} from 'react';
import {ReactComponent as BlogLinkIcon} from "../../assets/myPage/BlogLinkIcon.svg";
import ProfileMyProject from "./components/ProfileMyProject";
import GetUserProfile from "../../apis/profile/GetUserProfile";
import MoveIcon from "../../assets/profile/MoveIcon.png"
import ProposalWrite from "./components/ProposalWrite";

const menuItems = [
    {key: 'profileMyProject', label: '사용자의 프로젝트'},
    {key: 'boostProject', label: '후원한 프로젝트'},
    {key: 'likeProject', label: '좋아요한 프로젝트'},
];

const Profile = () => {
    const [menu, setMenu] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [proposalWrite, setProposalWrite] = useState(false);

    const filteredMenuItems = userInfo?.company
        ? menuItems.filter(item => item.key !== 'profileMyProject')
        : menuItems.filter(item => item.key !== 'boostProject');

    useEffect(() => {
        const GetUserInfo = async () => {
            try {
                const result = await GetUserProfile(14);
                setUserInfo(result.result)
                setMenu(result.result.company ? 'boostProject' : 'profileMyProject')
                console.log(result.result);
            } catch (error) {
                console.log(error);
            }
        }
        GetUserInfo();
    }, []);

    return (
        <div className='profile-container'>
            <div>
                <div><img className='profile-image' src={userInfo?.userInfo.image} alt="userImage"/></div>
                <div className='profile-name'>{userInfo?.userInfo.name}</div>
                <div className='profile-job'>{userInfo?.userInfo.tag}</div>
                <a href="" className='profile-blog-link'><BlogLinkIcon/><span
                    style={{width: '160px', overflow: 'hidden'}}>{userInfo?.userInfo.link}</span></a>
                <div className='flex gap-x-8 items-center justify-center'>
                    <div className='text-center'>
                        <div className='text-2xl mb-3'>팔로잉</div>
                        <div className='text-4xl font-bold font-Bruno'>{userInfo?.userInfo.followingCount}</div>
                    </div>
                    <hr className='profile-hr'/>
                    <div className='text-center'>
                        <div className='text-2xl mb-3'>팔로워</div>
                        <div className='text-4xl font-bold font-Bruno'>{userInfo?.userInfo.followerCount}</div>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='profile-introduce'>
                    <p className='font-semibold text-[27px] mb-6'>{userInfo?.title}</p>
                    <p className='text-2xl'>{userInfo?.content}</p>
                </div>

                {!proposalWrite &&
                    <>
                        <section className='flex gap-x-12 mt-14 mb-16'>
                            {filteredMenuItems.map((item) => (
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
                            {menu === 'profileMyProject' && <ProfileMyProject isCompany={false}/>}
                            {menu === 'boostProject' && <ProfileMyProject isCompany={true}/>}
                            {menu === 'likeProject' && <div>좋아요한 프로젝트 내용</div>}
                        </section>
                    </>
                }

                {proposalWrite &&
                    <ProposalWrite onBack={() => setProposalWrite(false)}/>
                }
            </div>
            {
                userInfo?.company && !proposalWrite && <div className='profile-fab' onClick={() => {
                    setProposalWrite(true)
                }}>프로젝트 제안하기 <img src={MoveIcon} alt=">"/></div>}
        </div>
    );
};

export default Profile;