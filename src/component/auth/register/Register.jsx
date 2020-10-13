import React, { useState } from 'react'
import './register.css'
import { Formik } from 'formik';
import * as yup from 'yup';
import logoBlanja from '../../../assets/image/logo-blanja.png'



const Register = ({ changeToLogin }) => {
    const [role, setRole] = useState(2)
    const isLogin = true

    let reviewSchema = ''
    if (role === 1) {
        reviewSchema = yup.object({
            username: yup.string().required(),
            email: yup.string().required().email(),
            phone_number: yup.number().required(),
            store_name: yup.string().required(),
            password: yup
                .string()
                .required()
                .matches(
                    /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                    'password must be include lowerCase, upperCase, numbers and minimum 8 characters',
                ),
        });
    } else {
        reviewSchema = yup.object({
            username: yup.string().required(),
            email: yup.string().required().email(),
            password: yup
                .string()
                .required()
                .matches(
                    /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                    'password must be include lowerCase, upperCase, numbers and minimum 8 characters',
                ),
        });
    }

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
            <form id="create-course-form">
                <div className="row content">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <img src={logoBlanja} alt="logo" width="120" height="50" />
                    </div>
                    <div className="col-md-12 text-center mt-3">
                        <p className="font-weight-bold">Please sign up with your account</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <button type="button" className={styleBtnCustomer} onClick={() => { setRole(2); }}>Custommer</button>
                        <button type="button" className={styleBtnSeller} onClick={() => { setRole(1); }}>Seller</button>
                    </div>

                    <Formik
                        initialValues={{ username: '', email: '', password: '', phone_number: '', store_name: '' }}
                        validationSchema={reviewSchema}
                        onSubmit={(values, { resetForm }) => {
                            if (role === 1) {
                                console.log(values)
                                resetForm({ values: '' })
                            } else {
                                const data = {
                                    username: values.username,
                                    email: values.email,
                                    password: values.password
                                }
                                console.log(data);
                                resetForm({ values: '' })
                            }

                        }}>
                        {(props) => (
                            <>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                                    <input type="text" className="input-text username" placeholder="Name" name="username" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.username} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                                    <p className="text-red">{props.touched.username && props.errors.username}</p>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                    <input type="text" className="input-text" placeholder="Email" name="email" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                                    <p className="text-red">{props.touched.email && props.errors.email}</p>
                                </div>
                                {
                                    role === 1 ?
                                        <>
                                            <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                                <input type="text" className="input-text" placeholder="Phone Number" name="phone_number" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.phone_number} />
                                            </div>
                                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                                <p className="text-red">{props.touched.phone_number && props.errors.phone_number}</p>
                                            </div>
                                            <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                                <input type="text" className="input-text" placeholder="Store Name" name="store_name" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.store_name} />
                                            </div>
                                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                                <p className="text-red">{props.touched.store_name && props.errors.store_name}</p>
                                            </div>
                                        </> : null
                                }
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                                    <input type="password" className="input-text" placeholder="Password" name="password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password} /> <br />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                                    <p className="text-red">{props.touched.password && props.errors.password}</p>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                                    <button type="button" className="btn-submit" onClick={props.handleSubmit}>Register</button>
                                </div>
                            </>
                        )}
                    </Formik>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <p>Already have a Blanja account? <span className="text-red" onClick={changeToLogin}>Login</span></p>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Register
