import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../components/EmptyCart';
import ProductPopup from '../components/ProductPopup';
import Product from '../components/Product';
import { Container, Row } from 'react-bootstrap';
import '../styles/Cart.css';
//import Product from '../components/Product';

const Cart = () => {

    const productsInCart = useSelector( state => state.cart.productCart);
    const [quantityProductsInCart, setQuantityProductsInCart] = useState(0);

    const messages = useSelector(state => state.languages.messages);

    const [modalShow, setModalShow] = useState(false);
    const [modalName, setModalName] = useState('');
    const [modalSrc, setModalSrc] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const [modalPrice, setModalPrice] = useState(0.0);

    const sets = (name, src, description, price) => {
        setModalShow(true);
        setModalName(name);
        setModalSrc(src);
        setModalDescription(description);
        setModalPrice(price);
    }

    useEffect(()=> {        
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
                {
                    products.map((product) => (
                        <Product
                            product={product}
                        />
                    ))
                }
            </tbody>
        </table>
        
    )

    return (
        <div>
            <body>
                <div id='cart-title'>
                    <Container>
                        <h2>{messages['cart_text_my']} <strong>{messages['cart_text_cart']}</strong></h2>
                    </Container>
                </div>
                <Container className='product-container'>
                    <Row>
                        {
                            quantityProductsInCart !== 0 
                            ? showAllProductsInCart(productsInCart) 
                            : <EmptyCart />
                        }
                    </Row>
                    <ProductPopup
                        name={modalName}
                        src={modalSrc}
                        description={modalDescription}
                        price={modalPrice}
                        show={modalShow}
                        hide={() => setModalShow(false)}
                    />
                </Container>
            </body>
        </div>
    )
}

export default Cart;