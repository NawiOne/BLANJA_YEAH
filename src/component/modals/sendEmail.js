import React from 'react'
import {Button, Modal} from 'react-bootstrap'

const sendEmail = ({show, handleClose}) => {
    return (
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Check your email to change the password</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default sendEmail
