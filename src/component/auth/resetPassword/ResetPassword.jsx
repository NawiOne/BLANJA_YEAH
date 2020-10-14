import React, { useState } from 'react'
import './resetPassword.css'
import { Formik } from 'formik';
import * as yup from 'yup';
import Axios from 'axios'
import logoBlanja from '../../../assets/image/logo-blanja.png'
import Modal from '../../modals/sendEmail';

const ResetPassword = ({ changeToRegister }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const sendEmail = (email) => {
        const api = `http://localhost:8000/auth/sendEmail`
        Axios.post(api, { email: email })
            .then(data => {
                handleShow()
            })
            .catch(err => console.log(err))
    }

    const reviewSchema = yup.object({
        email: yup.string().required().email(),
    });

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
                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={reviewSchema}
                        onSubmit={(values, { resetForm }) => {
                            sendEmail(values.email)
                            resetForm({ values: '' })
                        }}>
                        {(props) => (
                            <>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-4">
                                    <input type="text" className="input-text" placeholder="Email" name="email" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email} />
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center">
                                    <p className="text-red">{props.touched.email && props.errors.email}</p>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                                    <button type="button" className="btn-submit" onClick={props.handleSubmit}>Send email</button>
                                </div>
                            </>
                        )}
                    </Formik>

                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                        <p>Don't have a Blanja account? <span className="text-red" onClick={changeToRegister}>Register</span></p>
                    </div>
                </div>
            </form>
            <Modal show={show} handleShow={handleShow} handleClose={handleClose} />
        </div >
    )
}

export default ResetPassword
