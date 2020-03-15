import React from 'react';
import Register from './Register';
import { Button, Modal } from 'react-bootstrap';

const RegisterModal = (props) => {
    
    return (
        <div>
            <Modal show={props.showRegister} onHide={props.hideRegister}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese los siguiente datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.hideRegister}>
                        Registrarse
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
}
 
export default RegisterModal;