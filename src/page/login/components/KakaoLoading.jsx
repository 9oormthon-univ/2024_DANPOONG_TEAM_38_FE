import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const KakaoLoading = () => {
    const [authorizationCode, setAuthorizationCode] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        if (code) {
            setAuthorizationCode(code);
            console.log(code);
            // navigate('/');
        }
    }, []);

    return (
        <div className='text-center'>
            로딩중
            <br/>
            {authorizationCode}
        </div>
    );
};

export default KakaoLoading;