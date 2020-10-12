import React, { useState } from 'react'
import './resetPassword.css'
import logoBlanja from '../../../assets/image/logo-blanja.png'

const ResetPassword = ({ changeToRegister }) => {
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
                        <p className="font-weight-bold">Reset password</p>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                        <input type="text" className="input-text" placeholder="Email" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                        <button type="button" className="btn-submit">Send email</button>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <p>Don't have a Blanja account? <span className="text-red" onClick={changeToRegister}>Register</span></p>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default ResetPassword
