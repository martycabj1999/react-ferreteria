import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Product from '../components/Product';
import EmptyCart from '../components/EmptyCart';
import '../styles/Cart.css';

const Cart = () => {

  const [quantityProductsInCart, setQuantityProductsInCart] = useState(0);

  const productsInCart = useSelector(state => state.cart.productCart);
  const messages = useSelector(state => state.languages.messages);

  useEffect(() => {
    setQuantityProductsInCart(productsInCart.length);
  }, [productsInCart]);

  const showAllProductsInCart = (products) => (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>{messages['cart_products_name']}</th>
          <th>{messages['cart_products_price']}</th>
          <th>{messages['cart_products_actions']}</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </tbody>
    </table>
  )

  return (
    <Fragment>
      <div id='cart-title'>
        <Container>
          <h2>{messages['cart_text_my']} <strong>{messages['cart_text_cart']}</strong></h2>
        </Container>
      </div>
      <Container className='product-container'>
        <Row>
          {quantityProductsInCart !== 0
            ? showAllProductsInCart(productsInCart)
            : <EmptyCart />}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Cart;