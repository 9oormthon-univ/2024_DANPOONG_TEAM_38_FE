import React, {useEffect, useState} from 'react';
import {ReactComponent as Step0} from "../../../assets/myPage/myProject/Step0.svg";
import {ReactComponent as Step1} from "../../../assets/myPage/myProject/Step1.svg";
import {ReactComponent as Step2} from "../../../assets/myPage/myProject/Step2.svg";
import {ReactComponent as Step3} from "../../../assets/myPage/myProject/Step3.svg";
import GetMyProject from "../../../apis/myPage/GetMyProject";
import Icons from '../../../assets/myPage/Icons/Icons';
import DeleteProject from "../../../apis/myPage/DeleteProject";

const StepMap = [
    {step: 0, title: '작성', img: <Step0/>},
    {step: 1, title: '심사', img: <Step1/>},
    {step: 2, title: '펀딩', img: <Step2/>},
    {step: 3, title: '완료', img: <Step3/>}
];

const IconMap = {
    "미술": Icons.ArtIcon,
    "뷰티": Icons.BeautyIcon,
    "소품": Icons.BoxIcon,
    "기업": Icons.BusinessIcon,
    "게임": Icons.GameIcon,
    "음악": Icons.MusicIcon,
    "인기": Icons.PopularityIcon,
    "지역": Icons.RegionIcon,
    "웹/앱": Icons.WebIcon
};

const MyProject = () => {
    const [projects, setProjects] = useState([]);

    //내 프로젝트들 조회
    useEffect(() => {
        const GetMyProjects = async () => {
            try {
                const result = await GetMyProject();
                if (result?.data?.isSuccess) {
                    setProjects(result.data.result);
                }
                console.log('프로젝트: ',result);
            } catch (error) {
                console.log(error);
            }
        }
        GetMyProjects();
    }, []);

    const deleteProject = async (projectId) => {
        const result = await DeleteProject(projectId);
        console.log(result);
    }

    const calculateStep = (progressRate) => {
        if (progressRate <= 25) return 0;
        if (progressRate <= 50) return 1;
        if (progressRate <= 75) return 2;
        return 3; // 76~100은 3
    };

    return (
        <div className='myProject-container'>
            {projects.map((project) => {
                const progressRate = project.progressRate;
                const currentStep = calculateStep(progressRate);

                return (
                    <div key={project.id} className='myProject-box'>
                        <div><img className='myProject-image' src={project.image} alt="project-img"/></div>
                        <div className='myProject-content'>
                            <div>
                                <span className='myProject-date'>{project.progressPeriod}</span>
                                <div className='flex justify-between'>
                                    <p className='myProject-title'>{project.mainTitle}</p>
                                    <div>
                                        <img className='myProject-icon' src={IconMap[project.category]} alt="dummy"/>
                                        <span>{project.category}</span>
                                    </div>
                                </div>
                                <div className='myProject-progress'>
                                    <div className='progress-steps'>
                                        {StepMap.map((index) => (
                                            <div>
                                                <div
                                                    key={index.step}
                                                    className={`step ${index.step <= currentStep ? 'active' : ''}`}
                                                >
                                                    {index.img}
                                                </div>
                                                <span
                                                    style={{color: `${index.step <= currentStep ? '#00C78C' : '#C5EBE0'}`}}>{index.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='myProject-progress-gauge'
                                         style={{width: `${(currentStep / 3) * 100}%`}}></div>
                                </div>
                            </div>
                            <div className='flex gap-x-3 justify-end'>
                                <button className='myProject-button'>관리하기</button>
                                <button className='myProject-button' onClick={() => {
                                    deleteProject(project.id)
                                }}>삭제하기
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default MyProject;