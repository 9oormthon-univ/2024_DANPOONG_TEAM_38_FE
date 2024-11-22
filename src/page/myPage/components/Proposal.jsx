import React, {useEffect, useState} from 'react';
import {ReactComponent as BackArrowIcon} from '../../../assets/myPage/BackArrowIcon.svg';
import DummyImg2 from '../../../assets/myPage/DummyImg2.png';
import GetProposal from "../../../apis/myPage/GetProposal";
import ProposalDetail from "./ProposalDetail";

const Proposal = () => {
    const [proposals, setProposals] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [detailProposal, setDetailProposal] = useState(null);

    const GetProposals = async (page) => {
        try {
            const response = await GetProposal(page);
            if (response?.data?.isSuccess) {
                const result = response.data.result;
                setProposals(result.content);
                setTotalPages(result.totalPages);
                console.log(result);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        GetProposals(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (detailProposal !== null) {
        return (
            <ProposalDetail
                detailProposal={detailProposal}
                onBack={() => setDetailProposal(null)}
            />
        );
    }

    return (
        <div className='proposal-container'>
            {proposals.map((proposal, index) => (
                <div key={index} className='proposal-box'>
                    <div className='flex gap-x-7 justify-between'>
                        <div className='flex gap-x-7 flex-1'>
                            <div className='text-center'>
                                <div className='overflow-hidden'>
                                    <img
                                        className='proposal-profile-image'
                                        src={proposal.image || DummyImg2}
                                        alt="프로필"
                                    />
                                </div>
                                <span className='proposal-user-name'>{proposal.userName}</span>
                            </div>
                            <div className='proposal-content'>
                                <span className='proposal-date'>{proposal.createdAt}</span>
                                <p className='proposal-title'>{proposal.title}</p>
                                <p className='proposal-detail'>{proposal.content}</p>
                            </div>
                        </div>
                        <div className='scale-x-[-1] my-auto cursor-pointer'>
                            <BackArrowIcon onClick={() => setDetailProposal(proposal.id)}/>
                        </div>
                    </div>
                    <div className='flex gap-x-3 justify-end mt-3'>
                        <button className='proposal-button'>수락하기</button>
                        <button className='proposal-button'>거절하기</button>
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

export default Proposal;