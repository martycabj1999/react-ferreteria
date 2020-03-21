import React, { useState } from 'react';
import EmptyCart from './EmptyCart';
import ProductPopup from './ProductPopup';
import { Container, Card, Button, Figure, Row, Col } from 'react-bootstrap';
import '../style/Cart.css';

const Cart = () => {

    const productsInCart = [
        {
            id: 1,
            name: 'Nombre del producto lorem ipsum dolor sit amet',
            src: 'https://www.ocu.org/-/media/ocu/images/home/vivienda%20y%20energia/equipamiento%20hogar/herramientas%20cabecera.jpg?la=es-es&rev=9e765ac9-da97-4833-a910-e2168b4c0749&hash=4138B2A3F478CC996CF1384D157DCCFA56D61528',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        },
        {
            id: 4,
            name: 'Nombre del producto',
            src: 'https://www.ocu.org/-/media/ocu/images/home/vivienda%20y%20energia/equipamiento%20hogar/herramientas%20cabecera.jpg?la=es-es&rev=9e765ac9-da97-4833-a910-e2168b4c0749&hash=4138B2A3F478CC996CF1384D157DCCFA56D61528',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        },
        {
            id: 1,
            name: 'Nombre del producto',
            src: 'https://i.ytimg.com/vi/p4wdZbIg2b0/hqdefault.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        }
    ]
    const quantityProductsInCart = productsInCart.length

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

    const showAllProductsInCart = (products) => (
        products.map((product) =>
            <Card className='product'>
                <Row>
                    <Col md={6} lg={6}><Figure.Image id='img' src={product.src} /></Col>
                    <Col md={6} lg={6}><Card.Title id='title'>{product.name}</Card.Title></Col>
                </Row>
                <Button
                    onClick={() => sets(product.name, product.src, product.description, product.price)}
                    as='button'
                    variant="primary">
                    Ver mas
				</Button>
            </Card>
        )
    )

    const listProductsInCart = quantityProductsInCart !== 0 ? showAllProductsInCart(productsInCart) : <EmptyCart />;

    return (
        <div>
            <body>
                <div id='cart-title'>
                    <Container>
                        <h2>Mi <strong>Carrito</strong></h2>
                    </Container>
                </div>
                <Container className='product-container'>
                    {listProductsInCart}
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