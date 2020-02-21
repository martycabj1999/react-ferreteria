import React, {useState} from 'react';
import Login from './Login';
import Register from '../register/RegisterModal';
import { Button, Modal } from 'react-bootstrap';

const LoginModal = (props) => {
    

    const [showRegister, setShowRegister] = useState(false);
    const [show, setShow] = useState(true);
    const handleCloseRegister= () => setShowRegister(false);
    const handleShowRegister = () => {
        setShow(false);
        setShowRegister(true);
    }

    return (
        <div>
            <Modal show={props.showLogin} onHide={props.hideLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Bienvenido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login show={show} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShowRegister}>
                        Registrarse
                    </Button>
                    <Register showRegister={showRegister} hideRegister={handleCloseRegister} />
                    <Button variant="primary" onClick={props.hideLogin}>
                        Iniciar Sesion
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
}
 
export default LoginModal;