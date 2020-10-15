import React from 'react'
import {Button, Modal} from 'react-bootstrap'

const changePasswordSuccess = ({show, handleClose, redirect}) => {
    return (
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>Change password successfully, please login</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => {handleClose(); redirect.push('/')}}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default changePasswordSuccess
