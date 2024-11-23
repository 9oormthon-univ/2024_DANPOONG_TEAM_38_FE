import React, {useState, useRef} from 'react';
import {ReactComponent as BackArrowIcon} from '../../../assets/myPage/BackArrowIcon.svg';
import FileUploadIcon from '../../../assets/profile/FileUploadIcon.png'
import PostProposal from "../../../apis/profile/PostProposal";

const ProposalWrite = ({onBack, id}) => {
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        file: null,
    });

    const InputChange = (e) => {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                file: file,
            });
        }
    };

    const ClickSubmit = async () => {
        const {title, content, file} = formData;

        if (!title || !content || !file) {
            alert('모든 필드를 작성해주세요!');
            return;
        }

        const result = await PostProposal(id, formData);
        if (result.data.isSuccess) {
            alert('제안서 전송이 완료되었습니다.');
            console.log(result);
            onBack();
        }
    };

    return (
        <div className='proposal-write-container'>
            <button onClick={onBack} className='proposal-write-back-button'><BackArrowIcon/>작성 취소</button>
            <div>
                <h3 className='proposal-write-h3'>제안서 작성</h3>
                <p className='proposal-write-info'>해당 기업에게 보내는 제안서를 작성해주세요.</p>
                <hr style={{color: '#7F7F7F', margin: '25px 0 40px 0'}}/>
                <input type="text" id="title" placeholder='제목을 입력해주세요.' onChange={InputChange} value={formData.title}
                       className='proposal-write-input-text'/>

                <div className='flex gap-x-3'>
                    <div
                        onClick={() => fileInputRef.current.click()}
                        className="proposal-write-file-upload"
                    >
                        <img src={FileUploadIcon} alt="파일 업로드"/>
                    </div>
                    <span
                        className='proposal-write-file-upload-info'>{formData?.file ? formData.file.name : '파일 업로드'}</span>
                </div>
                <input
                    type="file"
                    id="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{display: 'none'}}
                />

                <textarea id="content" placeholder='내용을 입력해주세요.' onChange={InputChange} style={{height: '300px'}}
                          value={formData.content} className='proposal-write-input-text'/>
                <button className='proposal-write-button' onClick={ClickSubmit}>
                    제안서 보내기
                </button>
            </div>
        </div>
    );
};

export default ProposalWrite;