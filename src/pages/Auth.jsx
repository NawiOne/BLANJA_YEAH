import React, { useState } from 'react'
import Login from '../component/auth/login/Login'
import Register from '../component/auth/register/Register'
import ResetPassword from '../component/auth/resetPassword/ResetPassword'
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";


const Auth = () => {
    const [compLogin, setCompLogin] = useState('login')
    const changeToRegister = () => setCompLogin('register');
    const changeToLogin = () => setCompLogin('login');
    const changeToReset = () => setCompLogin('reset');

    const isLogin = useSelector((state)=>state.auth.isLogin);
    if(isLogin === true) return <Redirect to='/'/>

    return (
        <>
            {
                compLogin === 'login' ? <Login changeToRegister={changeToRegister} changeToReset={changeToReset} /> : compLogin === 'register' ? <Register changeToLogin={changeToLogin} /> : <ResetPassword changeToRegister={changeToRegister} />
            }
            {/* <ResetPassword changeToRegister={changeToRegister} /> */}
        </>
    )
}

export default Auth
