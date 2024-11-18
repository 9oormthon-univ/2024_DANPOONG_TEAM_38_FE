import CommonUser from '../../assets/login/CommonUser.png';
import CompanyUser from '../../assets/login/CompanyUser.png';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='login-container'>
            <h1 className='login-title'>로그인</h1>
            <section className='login-button-section'>
                <button className='login-button' onClick={() => navigate('/login/user', {state: 'user'})}>
                    <img className='login-button-image' src={CommonUser} alt="CommonUser"/>
                    <span>일반 사용자</span>
                </button>
                <button className='login-button' onClick={() => navigate("/login/company", {state: 'company'})}>
                    <img className='login-button-image' src={CompanyUser} alt="CompanyUser"/>
                    <span>기업 후원자</span>
                </button>
            </section>
            <footer className='login-footer'>
                <a href="">About Us</a>
                <a href="">Contact</a>
                <a href="">Terms of Use</a>
            </footer>
        </div>
    );
};

export default Login;
