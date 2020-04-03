import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
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
    products.map((product) => (
      <Product
        key={product.id}
        product={product}
      />
    ))
  )

  return (
    <Fragment>
      <Container>
        <h2 className="my-4">
          {messages['cart_text_my']} <strong>{messages['cart_text_cart']}</strong>
        </h2>
        {quantityProductsInCart > 0 ? showAllProductsInCart(productsInCart) : <EmptyCart />}
      </Container>
    </Fragment>
  );
}

export default Cart;