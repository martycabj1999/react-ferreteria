import React from 'react';
import Login from '../components/Login';
import { Modal } from 'react-bootstrap';

const LoginModal = (props) => {
    return (
        <div>
            <Modal show={props.showLogin} onHide={props.hideLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Bienvenido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login show={props.showLogin} onHide={props.hideLogin} />
                </Modal.Body>
            </Modal>
        </div>
        );
}
 
export default LoginModal;