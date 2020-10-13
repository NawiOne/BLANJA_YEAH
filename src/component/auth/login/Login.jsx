import React, { useState } from 'react'
import './login.css'
import { Formik } from 'formik';
import * as yup from 'yup';
import logoBlanja from '../../../assets/image/logo-blanja.png'

const Login = ({ changeToRegister, changeToReset }) => {
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

    const reviewSchema = yup.object({
        email: yup.string().required().email(),
        password: yup
            .string()
            .required()
    });

    return (
        <div className="d-flex justify-content-center align-items-center container-auth">
            <div className="row content">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <img src={logoBlanja} alt="logo" width="120" height="50" />
                </div>
                <div className="col-md-12 text-center mt-3">
                    <p className="font-weight-bold">Please login with your account</p>
                </div>
                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                    <button type="button" className={styleBtnCustomer} onClick={() => setRole(2)}>Custommer</button>
                    <button type="button" className={styleBtnSeller} onClick={() => setRole(1)}>Seller</button>
                </div>
                {!isLogin ? <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                    <p className="text-red">Wrong email or password</p>
                </div> : null}
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={reviewSchema}
                    onSubmit={(values, { resetForm }) => {
                        const data = {
                            ...values,
                            level_id: role
                        }
                        console.log(data)
                        resetForm({ values: '' })
                    }}>
                    {(props) => (
                        <>
                            <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                                <input type="text" className="input-text" placeholder="Email" name="email" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email} /> <br />

                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                <p className="text-red">{props.touched.email && props.errors.email}</p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                <input type="password" className="input-text" placeholder="Password" name="password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password} />
                                <br />
                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                <p className="text-red">{props.touched.password && props.errors.password}</p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center mt-2">
                                <p className="text-forgot-password" onClick={changeToReset}>Forgot password?</p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                <button type="button" className="btn-submit" onClick={props.handleSubmit}>Login</button>
                            </div>
                        </>
                    )}
                </Formik>
                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                    <p>Don't have a Blanja account? <span className="text-red" onClick={changeToRegister}>Register</span></p>
                </div>
            </div>
        </div >
    )
}

export default Login
