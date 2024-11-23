import React, {useEffect, useState} from 'react';
import GetProposalDetail from "../../../apis/myPage/GetProposalDetail";
import {ReactComponent as BackArrowIcon} from '../../../assets/myPage/BackArrowIcon.svg';
import DownloadIcon from '../../../assets/myPage/DownloadIcon.png'
import FileIcon from '../../../assets/myPage/FileIcon.png'
import axios from "axios";

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

    const handleDownload = (file) => {
        axios.get(file, {responseType: 'blob'})
            .then(response => {
                const fileUrl = window.URL.createObjectURL(new Blob([response.data]));

                const fileName = file.split('/').pop();

                const fileExtension = fileName.split('.').pop();

                const downloadFileName = '제안서'+ '.' +fileExtension;

                const link = document.createElement('a');
                link.href = fileUrl;
                link.setAttribute('download', downloadFileName);
                document.body.appendChild(link);
                link.click();
                link.remove();
            })
            .catch(error => console.error("Download error:", error));
    };


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
                    <span className='proposal-detail-user-name'>{proposalDetail?.proposal.userName}</span>
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

            {proposalDetail?.files[0] &&
                <div className='proposal-detail-file-box'>
                    {proposalDetail?.files.map((file, index) => (
                        <div key={index} className='flex w-full gap-x-5'>
                            <img src={FileIcon} alt=""/>
                            <button
                                key={index}
                                onClick={() => handleDownload(file)}
                                className='flex justify-between w-full items-center font-medium text-2xl'
                            >
                                {`제안서${index + 1} 다운로드`}
                                <img src={DownloadIcon} alt=""/>
                            </button>
                        </div>
                    ))}
                </div>}

            <div className='flex gap-x-3 justify-end mt-3'>
                <button className='proposal-detail-button'>수락하기</button>
                <button className='proposal-detail-button'>거절하기</button>
            </div>
        </div>
    );
};

export default ProposalDetail;