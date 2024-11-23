import React, {useEffect, useState} from 'react';
import CircleProgressBar from "../../profile/components/CircleProgressBar";
import MoneyIcon from "../../../assets/profile/MoneyIcon.png";
import BackArrowIcon from "../../../assets/myPage/BackArrowIcon.svg";
import GetCompanyBoost from "../../../apis/profile/GetCompanyBoost";
import {useNavigate} from "react-router-dom";

const MyBoost = ({id}) => {
    const navigate = useNavigate();
    const [profileProjects, setProfileProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const GetProfileBoost = async (userId, page) => {
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

        GetProfileBoost(id, currentPage);
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

                        <div className='flex gap-x-12 mt-[31px] items-center'>
                            <div className='text-center flex flex-col'>
                                <CircleProgressBar size={65} progress={project.progressRate} strokeWidth={4}/>
                                <span className='font-normal'>기여도</span>
                            </div>
                            <div className='profile-boost-box'>
                                <img src={MoneyIcon} alt="" style={{width: '30px', height: '30px'}}/>
                                <span className='profile-boost'>{project.boostedAmount}원 후원</span>
                            </div>
                        </div>
                        <button onClick={() => navigate('/detail', {state: {project}})}
                                className='profile-myProject-back-button'><img src={BackArrowIcon} alt="backIcon"/>
                        </button>
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

export default MyBoost;