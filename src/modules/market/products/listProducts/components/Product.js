import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { getCartProductAction } from '../../../cart/store/CartActions';
import QuestionPopup from '../../../cart/components/QuestionPopup';
import '../styles/Product.css';

const Product = ({ product }) => {

  const [modalShow, setModalShow] = useState(false);
  const messages = useSelector(state => state.languages.messages);
  const dispatch = useDispatch();

  const sendProductToCart = product => {
    dispatch(getCartProductAction(product));
    // Mostrar modal con pregunta
    setModalShow(true);
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
            <Card.Title className="product-title" align="center">{product.name}</Card.Title>
            <Card.Text className="product-text">
              {product.description}
            </Card.Text>
          </Link>
          <QuestionPopup
            show={modalShow}
            setShow={setModalShow}
          />
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