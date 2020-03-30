import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { getCartProductAction } from '../../store/ProductsAction';
import '../styles/Product.css';

const Product = ({ product }) => {

  const messages = useSelector(state => state.languages.messages);
  const dispatch = useDispatch();

  const sendProductToCart = product => {
    dispatch(getCartProductAction(product));
    console.log(product);
  }

  return (
    <Col md={4}>
      <Card mb={4} className="shadow-sm">
        <Card.Img
          variant="top"
          className="bd-placeholder-img"
          width="100%"
          height="225"
          src="https://i.ytimg.com/vi/wjxwpKXcONQ/maxresdefault.jpg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img">
        </Card.Img>
        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Text>{product.description}</Card.Text>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              type="button"
              variant="outline-secondary"
              className="btn-sm"
              onClick={() => sendProductToCart(product)}
            >{messages['list_products_product_buy']}</Button>
            <small className="text-muted">$ {product.price}</small>
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