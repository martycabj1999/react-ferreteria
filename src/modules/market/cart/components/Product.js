import React, { Fragment } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

// Redux
import { useSelector } from 'react-redux';

const Product = ({ product }) => {

  const messages = useSelector(state => state.languages.messages);

  // Confirmar si desea eliminar producto (sin funcionaliad por ahora)
  const confirmRemoveProduct = () => {
    // Preguntar al usuario
    Swal.fire({
      title: messages['cart_product_delete_question'],
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: messages['cart_product_delete_confirm'],
      cancelButtonText: messages['cart_product_delete_cancel'],
    }).then((result) => {
      console.log('Eliminado');
    })
  };

  // Funcion que redirige de forma programada (sin funcionaliad por ahora)
  const confirmBuyProduct = () => {
    // Preguntar al usuario
    Swal.fire({
      title: messages['cart_product_buy_question'],
      icon: 'primary',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: messages['cart_product_buy_confirm'],
      cancelButtonText: messages['cart_product_buy_cancel'],
    }).then((result) => {
      console.log('Comprado');
    })
  };

  return (
    <Fragment>
      <Row>
        <Col md={7}>
          <Image
            className="img-fluid rounded mb-3 mb-md-0"
            src="http://placehold.it/700x300"
            alt=""
          />
        </Col>
        <Col md={5}>
          <h3 style={{ textTransform: "capitalize" }}>{product.name}</h3>
          <p>$ {product.price}</p>
          <p>{product.description}</p>
          <Button
            className="btn btn-primary mr-1"
            onClick={() => confirmBuyProduct()}
          >{messages['cart_product_buy']}</Button>
          <Button
            className="btn btn-danger"
            onClick={() => confirmRemoveProduct()}
          >{messages['cart_product_delete']}</Button>
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
}

// PropTypes
Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product;