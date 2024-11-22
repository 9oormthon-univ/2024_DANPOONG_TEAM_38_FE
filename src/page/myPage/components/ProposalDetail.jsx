import React, {useEffect, useState} from 'react';
import GetProposalDetail from "../../../apis/myPage/GetProposalDetail";
import {ReactComponent as BackArrowIcon} from '../../../assets/myPage/BackArrowIcon.svg';

const ProposalDetail = ({detailProposal, onBack}) => {
    const [proposalDetail, setProposalDetail] = useState(null);

    const fetchProposals = async (proposalId) => {
        try {
            const response = await GetProposalDetail(proposalId);
            console.log(response.result);
            setProposalDetail(response.result)
        } catch (error) {
            console.error('Error fetching proposals:', error);
        }
    };

    useEffect(() => {
        fetchProposals(detailProposal);
    }, []);

    return (
        <div className='proposal-detail-container'>
            <button onClick={onBack} className='proposal-detail-back-button'><BackArrowIcon/>뒤로가기</button>
            <div className='proposal-detail-box'>
                <div className='text-center'>
                    <div className='overflow-hidden'>
                        <img
                            className='proposal-detail-profile-image'
                            src={proposalDetail?.proposal.image}
                            alt="프로필"
                        />
                    </div>
                    <span className='proposal-detail-user-name'>{proposalDetail?.proposal.userName}성지훈</span>
                </div>
                <div className='flex-1'>
                    <div className='flex justify-between'>
                        <p className='proposal-detail-title'>{proposalDetail?.proposal.title}</p>
                        <span className='proposal-detail-date'>{proposalDetail?.proposal.createdAt}</span>
                    </div>
                    <hr className='my-11'/>
                    <p className='proposal-detail-content'>{proposalDetail?.proposal.content}</p>
                </div>
            </div>

            <div className='proposal-detail-file-box'>
                {proposalDetail?.files}
            </div>
            <div className='flex gap-x-3 justify-end mt-3'>
                <button className='proposal-detail-button'>수락하기</button>
                <button className='proposal-detail-button'>거절하기</button>
            </div>
        </div>
    );
};

export default ProposalDetail;