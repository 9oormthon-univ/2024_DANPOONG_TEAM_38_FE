import React, {useEffect, useState} from 'react';
import BackArrowIcon from "../../../assets/myPage/BackArrowIcon.svg";
import GetUserProfileProject from "../../../apis/profile/GetUserProfileProject";
import GetCompanyBoost from "../../../apis/profile/GetCompanyBoost";
import MoneyIcon from "../../../assets/profile/MoneyIcon.png";

const ProfileMyProject = ({isCompany}) => {
    const [profileProjects, setProfileProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const GetUserProfileProjects = async (userId, page) => {
            try {
                const response = await GetUserProfileProject(userId, page);
                const result = response.data.result;
                setProfileProjects(result.content);
                setTotalPages(result.totalPages);
                console.log('일반', result);
            } catch (error) {
                console.log(error);
            }
        }

        const GetCompanyProfileBoost = async (userId, page) => {
            try {
                const response = await GetCompanyBoost(userId, page);
                const result = response.data.result;
                setProfileProjects(result.content);
                setTotalPages(result.totalPages);
                console.log('기업', result);
            } catch (error) {
                console.log(error);
            }
        }

        if (isCompany) {
            GetCompanyProfileBoost(14, currentPage);
        } else {
            GetUserProfileProjects(14, currentPage);
        }
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className='profile-myProject-container'>
            {profileProjects.map((project, index) => (
                <div key={project.id} className='profile-myProject-box'>
                    <div><img className='profile-myProject-image' src={project.image} alt="dummy"/></div>
                    <div className='profile-myProject-content'>
                        <span className='profile-myProject-date'>{project.progressPeriod}</span>
                        <p className='profile-myProject-title'>{project.mainTitle}</p>
                        <p className='profile-myProject-subTitle'>{project.introduction}</p>
                        {isCompany ?
                            <div className='flex gap-x-12 mt-[31px]'>
                                <div className='text-center flex flex-col'>
                                    <div className="progress-circle">
                                    </div>
                                    <span className='font-normal'>기여도</span>
                                </div>
                                <div className='profile-boost-box'>
                                    <img src={MoneyIcon} alt=""/>
                                    <span className='profile-boost'>{project.boostedAmount}원 후원</span>
                                </div>
                            </div>
                            :
                            <div>
                                <div className='flex justify-between mt-[42px]'>
                                <span
                                    className='profile-myProject-span-color font-semibold'>{project.progressRate}% 달성</span>
                                    <div><span
                                        className='profile-myProject-span-color font-medium'>{project.achievedAmount}</span><span
                                        style={{color: '#7F7F7F'}}>/{project.targetAmount}</span></div>
                                </div>
                                <div className='profile-progress'>
                                    <div className='profile-progress-gauge'
                                         style={{width: `${project.progressRate}%`}}></div>
                                </div>
                            </div>
                        }
                        <a href="" className='profile-myProject-back-button'><img src={BackArrowIcon}
                                                                                  alt="backIcon"/></a>
                    </div>
                </div>
            ))}

            <div className='pagination-buttons flex justify-center my-5'>
                <button
                    className='pagination-button'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    이전
                </button>
                <span className='current-page'>{currentPage + 1} / {totalPages}</span>
                <button
                    className='pagination-button'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default ProfileMyProject;