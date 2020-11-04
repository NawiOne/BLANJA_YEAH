import React, { useState } from 'react'
import Login from '../component/auth/login/Login'
import Register from '../component/auth/register/Register'
import ResetPassword from '../component/auth/resetPassword/ResetPassword'
console.log(process.env.REACT_APP_GET_BY_CATEGORY)

const Auth = () => {
    const [compLogin, setCompLogin] = useState('login')
    const changeToRegister = () => setCompLogin('register');
    const changeToLogin = () => setCompLogin('login');
    const changeToReset = () => setCompLogin('reset');
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
