import React from "react";
import Header from "./Header";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer";
import LoginFooter from "./LoginFooter";

const Layout = () => {
    const location = useLocation();
    const path = location.pathname;

    const hideFooterPaths = ["/login", "/login/user", "/login/company", "/signup","/signup/company"];

    const showFooter = !hideFooterPaths.includes(path);

    return (
        <div className="layout-container">
            <Header/>
            <div>
                <Outlet/>
            </div>
            {showFooter && <Footer/>}
            {!showFooter && <LoginFooter/>}
        </div>
    );
};

export default Layout;
