import React, { Fragment } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';


// Redux
import { removeProductCartAction } from '../store/CartActions';

const Product = ({ product }) => {

  const messages = useSelector(state => state.languages.messages);
  const dispatch = useDispatch();

  const SweetAlert = (tittle, text, icon, confirm, cancel, type, id) => {

    Swal.fire({
      title: tittle,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      }).then((result) => {
        if (result.value){
          switch(type){
            case 'confirmRemoveProduct':
              dispatch (removeProductCartAction(id));
              break;
            case 'confirmBuyProduct':
              console.log('Comprado')
              break;
          }
        }
      }
    )
  }

  // Confirmar si desea eliminar producto (sin funcionaliad por ahora)
  const confirmRemoveProduct = (id) => {
    SweetAlert(
      messages['cart_product_delete_question'],
      '',
      'warning',
      messages['cart_product_delete_confirm'],
      messages['cart_product_delete_cancel'],
      'confirmRemoveProduct',
      id
    )
  };

  const confirmBuyProduct = () => {
    SweetAlert(
      messages['cart_product_buy_question'],
      '',
      'warning',
      messages['cart_product_buy_confirm'],
      messages['cart_product_buy_cancel'],
      'confirmBuyProduct'
    )
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
            onClick={() => confirmRemoveProduct(product.id)}
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