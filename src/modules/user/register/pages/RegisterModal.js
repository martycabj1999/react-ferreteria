import React from 'react';
import Register from '../components/Register';
import { useSelector} from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

const RegisterModal = (props) => {

    const messages = useSelector(state => state.languages.messages); 
    
    return (
        <div>
            <Modal show={props.showRegister} onHide={props.hideRegister}>
                <Modal.Header closeButton>
                    <Modal.Title>{messages['register_modal_obligatory']}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.hideRegister}>
                        {messages['register_modal_text']}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
}
 
export default RegisterModal;