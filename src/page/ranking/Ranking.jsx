import React, {useEffect, useState} from 'react';
import GetComRanking from "../../apis/project/GetComRanking";
import AwardIcon from "../../assets/ranking/AwardIcon.png";
import { ReactComponent as Next } from "../../assets/component/BigNext.svg";
import { ReactComponent as Back } from "../../assets/component/BigBack.svg";
import {useNavigate} from "react-router-dom";

const menu = [
    {name: "주간", sortType: "weekly"},
    {name: "월간", sortType: "monthly"},
    {name: "전체", sortType: "allTime"},
    {name: "프로젝트 수", sortType: "projects"},
];

const Ranking = () => {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(menu[0].sortType);
    const [companyRankData, setCompanyRankData] = useState([]);

    const fetchComRanking = async (sortType) => {
        try {
            const response = await GetComRanking(sortType);
            setCompanyRankData(response.result);
        } catch (error) {
            console.error("연동 실패", error);
        }
    };

    useEffect(() => {
        fetchComRanking(activeMenu);
    }, [activeMenu]);

    const handleNext = () => {
        const currentIndex = menu.findIndex(item => item.sortType === activeMenu);
        const nextIndex = (currentIndex + 1) % menu.length;
        setActiveMenu(menu[nextIndex].sortType);
    };

    const handleBack = () => {
        const currentIndex = menu.findIndex(item => item.sortType === activeMenu);
        const prevIndex = (currentIndex - 1 + menu.length) % menu.length;
        setActiveMenu(menu[prevIndex].sortType);
    };

    return (
        <div className='ranking-container'>
            <section className='flex mt-20'>
                <div className='w-1/2 flex flex-col justify-between'>
                    <div>
                        <h3 className='ranking-h3'>Company Ranking</h3>
                        <p className='ranking-info'>프로젝트에 많은 기여를 해준 상위 기업들을 확인해보세요!</p>
                    </div>
                    <div className='flex items-center'>
                        <img src={AwardIcon} alt="" style={{height: '69px'}}/>
                        <div>
                            <p className='font-semibold text-2xl'>{menu.find((item) => item.sortType === activeMenu)?.name} 1위</p>
                            <p className='ranking-first-company-name'>{companyRankData[0]?.name}</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-[500px] relative'>
                    <img src={companyRankData[0]?.image} alt="" className='ranking-first-company-image'/>
                    <div className='absolute right-0 bottom-0'>
                        <button className='mr-14' onClick={handleBack}><Back /></button>
                        <button onClick={handleNext}><Next/></button>
                    </div>
                </div>
            </section>
            <section className="ranking-menus">
                {menu.map((item) => (
                    <button
                        key={item.name}
                        className={`ranking-menu ${
                            activeMenu === item.sortType ? "active" : item.sortType
                        }`}
                        onClick={() => setActiveMenu(item.sortType)}
                    >
                        {item.name}
                    </button>
                ))}
            </section>
            <section className='ranking-companys'>
                {companyRankData
                    .sort((a, b) => b.contributionAmount - a.contributionAmount)
                    .map((company, index) => {
                        return (
                            index === 0 ?
                                <div className='ranking-first-company-box'
                                     onClick={()=>navigate(`/profile/${company.id}`)}
                                     key={company.id}>
                                    <div className='relative'>
                                        <img src={company.image} alt="" style={{minWidth:'350px',maxWidth:'350px',minHeight:'350px',maxHeight:'350px'}}/>
                                        <div
                                            className='absolute top-0 left-0 font-extrabold text-[45px]'>{(index + 1).toString().padStart(2, '0')}</div>
                                    </div>
                                    <div className='flex-1'>
                                        <h4 className='ranking-first-company-name1'>{company.name}</h4>
                                        <hr className='mt-7 mb-10'/>
                                        <h5 className='ranking-first-company-h5'>펀딩 금액</h5>
                                        <div
                                            className='ranking-first-company-number font-Bruno'>{company.contributionAmount.toLocaleString()}<span
                                            style={{fontSize: '26px'}}>원</span></div>
                                        <h5 className='ranking-first-company-h5'>기여 프로젝트 수</h5>
                                        <div
                                            className='ranking-first-company-number font-Bruno'>{company.contributionCount.toLocaleString()}<span
                                            style={{fontSize: '26px'}}>개</span></div>
                                    </div>
                                </div>
                                :
                                <div className='ranking-company' key={company.id}
                                     onClick={()=>navigate(`/profile/${company.id}`)}
                                >
                                    <div className='font-extrabold text-[45px]'>{(index + 1).toString().padStart(2, '0')}</div>
                                    <div className='flex-1'>
                                        <h4 className='ranking-company-name'>{company.name}</h4>
                                        <div className='flex'>
                                            <div className='w-1/2'>
                                                <h5 className='ranking-company-h5'>펀딩 금액</h5>
                                                <div className='ranking-company-number font-Bruno'>
                                                    {company.contributionAmount.toLocaleString()}원
                                                </div>
                                            </div>
                                            <div className='w-1/2'>
                                                <h5 className='ranking-company-h5'>기여 프로젝트 수</h5>
                                                <div className='ranking-company-number font-Bruno'>
                                                    {company.contributionCount.toLocaleString()}개
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                        );
                    })}
            </section>
        </div>
    );
};

export default Ranking;