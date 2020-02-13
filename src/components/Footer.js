import React, {Component} from 'react';
import {Modal, Button, Header} from 'react-bootstrap';

const Footer = (props) => {

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>

                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>

            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide} variant="outline-secondary">Close</Button>
            </Modal.Footer>
            
        </Modal>
    );
}
 
export default Footer;