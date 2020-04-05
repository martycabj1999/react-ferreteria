import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Card } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { object } from 'prop-types';
import Swal from 'sweetalert2';
import '../styles/Product.css';

// Redux
import { getCartProductAction } from '../../../cart/store/CartActions';

const Product = ({ product }) => {

  const messages = useSelector(state => state.languages.messages);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const sendProductToCart = product => {
    dispatch(getCartProductAction(product));
    Swal.fire({
      title: '¡Agregado al carrito!',
      text: '',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ir al carrito',
      cancelButtonText: 'Seguir comprando',
    }).then((result) => {
      if (result.value) {
        dispatch(getCartProductAction(product));
        history.push('/cart');
      }
    });
  };

  return (
    <Col md={4}>
      <Card mb={4} className="shadow-sm">
        <Link to={`/product/${product.id}`}>
          <Card.Img
            variant="top"
            className="bd-placeholder-img"
            width="100%"
            height="225"
            src={product.images[0].image}
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img">
          </Card.Img>
        </Link>

        <Card.Body>
          <Link className="product-link" to={`/product/${product.id}`}>
            <Card.Title className="product-title" align="center">
              {product.name}
              </Card.Title>
            <Card.Text className="product-text">
              {product.description}
            </Card.Text>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              type="button"
              className="btn-info"
              onClick={() => sendProductToCart(product)}
            >
              {messages['list_products_product_buy']}
            </Button>
            <strong className="text-muted">$ {product.price}</strong>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

// PropTypes
Product.propTypes = {
  product: object.isRequired
}

export default Product;