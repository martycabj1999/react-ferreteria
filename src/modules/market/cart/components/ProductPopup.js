import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductPopup = (props) => {
    //const { name, src, description, price, show, hide } = props;
    const { name, hide } = props;
    return (
        <Modal scrollable
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={hide} variant="outline-secondary">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductPopup;