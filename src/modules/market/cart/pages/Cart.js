import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Product from '../components/Product';
import EmptyCart from '../components/EmptyCart';
import Subtotal from '../components/Subtotal';
import '../styles/Cart.css';

const Cart = () => {

  const productsInCart = useSelector(state => state.cart.productsCart);
  const messages = useSelector(state => state.languages.messages);
  const [subtotal, setSubtotal] = useState(0.0);

  console.log(productsInCart);

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

        { productsInCart.length !== 0 
          ? <Subtotal 
              productsInCart={productsInCart}
              subtotal={subtotal}
              setSubtotal={setSubtotal}
            /> 
          : null
        }

        { productsInCart.length !== 0 ? showAllProductsInCart(productsInCart) : <EmptyCart />}
      </Container>
    </Fragment>
  );
}

export default Cart;