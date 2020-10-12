import React, { useState } from 'react'
import '../component/auth/login/login.css'
import logoBlanja from '../assets/image/logo-blanja.png'

const ConfirmationPassword = ({ changeToRegister, changeToReset }) => {
    const [role, setRole] = useState(2)
    const isLogin = true

    let styleBtnCustomer = "btn-custommer"
    if (role === 2) {
        styleBtnCustomer = "btn-custommer-active"
    } else {
        styleBtnCustomer = "btn-custommer"
    }

    let styleBtnSeller = "btn-seller"
    if (role === 1) {
        styleBtnSeller = "btn-seller-active"
    } else {
        styleBtnSeller = "btn-seller"
    }
    return (
        <div className="d-flex justify-content-center align-items-center container-auth">
            <form>
                <div className="row content">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <img src={logoBlanja} alt="logo" width="120" height="50" />
                    </div>
                    <div className="col-md-12 text-center mt-3">
                        <p className="font-weight-bold">Please login with your account</p>
                    </div>
                    <div className="col-md-12 text-center mt-2">
                        <p className="text-title-reset">We have sent an email containing a password reset instruction to your email.</p>
                    </div>
                    <div className="col-md-12 text-center">
                        <p className="text-title-reset">please check your email.</p>
                    </div>


                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <input type="password" className="input-text" placeholder="Password" /> <br />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <input type="password" className="input-text" placeholder="Password" /> <br />
                    </div>

                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                        <button type="button" className="btn-submit">Submit</button>
                    </div>

                </div>
            </form>
        </div >
    )
}

export default ConfirmationPassword
