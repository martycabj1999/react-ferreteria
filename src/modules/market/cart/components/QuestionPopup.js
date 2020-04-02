import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { func, bool } from 'prop-types';

const QuestionPopup = ({ show, setShow }) => {

  const history = useHistory();

  const redirectToCart = () => history.push('/cart');
  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Buena compra!
          </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => redirectToCart()}>
          Ir al Carrito
          </Button>
        <Button variant="primary" onClick={() => handleClose()}>
          Seguir Comprando
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

QuestionPopup.propTypes = {
  show: bool.isRequired,
  setShow: func.isRequired
}

export default QuestionPopup;