import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './footer/Footer';
import UpperNavbar from './navbar/UpperNavbar';
import LowerNavbar from './navbar/LowerNavbar';
import './Cart.css';

const Cart = () => {

    const productsInCart = [];
    const quantityProductsInCart = productsInCart.length;

    return (
        <div>
            <header>
                <UpperNavbar />
                <LowerNavbar quantityProductsInCart={quantityProductsInCart} />
            </header>
            <body>
                <div id='cart-title'>
                    <Container>
                        <h2>Mi <strong>Carrito</strong></h2>
                    </Container>
                </div>

            </body>
            <Footer />
        </div>
    )
}

export default Cart;