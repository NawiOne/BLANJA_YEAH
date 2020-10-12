import React, { useState } from 'react'
import './register.css'
import logoBlanja from '../../../assets/image/logo-blanja.png'

const Register = ({ changeToLogin }) => {
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
                        <p className="font-weight-bold">Please sign up with your account</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <button type="button" className={styleBtnCustomer} onClick={() => setRole(2)}>Custommer</button>
                        <button type="button" className={styleBtnSeller} onClick={() => setRole(1)}>Seller</button>
                    </div>
                    {!isLogin ? <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                        <p className="text-red">Wrong email or password</p>
                    </div> : null}
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                        <input type="text" className="input-text" placeholder="Name" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <input type="text" className="input-text" placeholder="Email" />
                    </div>
                    {
                        role === 1 ?
                            <>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                    <input type="text" className="input-text" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                    <input type="text" className="input-text" placeholder="Store Name" />
                                </div>
                            </> : null
                    }
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <input type="password" className="input-text" placeholder="Password" /> <br />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                        <button type="button" className="btn-submit">Register</button>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <p>Already have a Blanja account? <span className="text-red" onClick={changeToLogin}>Login</span></p>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Register
