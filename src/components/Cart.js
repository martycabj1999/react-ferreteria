import React from 'react';
import Footer from './footer/Footer';
import UpperNavbar from './navbar/UpperNavbar';
import LowerNavbar from './navbar/LowerNavbar';
import { Container, Card, Button, Figure, Row, Col } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {

    const productsInCart = [
        {
            name: 'Nombre del producto lorem ipsum dolor sit amet',
            src: 'https://www.ocu.org/-/media/ocu/images/home/vivienda%20y%20energia/equipamiento%20hogar/herramientas%20cabecera.jpg?la=es-es&rev=9e765ac9-da97-4833-a910-e2168b4c0749&hash=4138B2A3F478CC996CF1384D157DCCFA56D61528',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        },
        {
            name: 'Nombre del producto',
            src: 'https://i.ytimg.com/vi/nVSTdQ5HGo8/maxresdefault.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        }, {
            name: 'Nombre del producto',
            src: 'https://www.ocu.org/-/media/ocu/images/home/vivienda%20y%20energia/equipamiento%20hogar/herramientas%20cabecera.jpg?la=es-es&rev=9e765ac9-da97-4833-a910-e2168b4c0749&hash=4138B2A3F478CC996CF1384D157DCCFA56D61528',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        },
        {
            name: 'Nombre del producto',
            src: 'https://i.ytimg.com/vi/nVSTdQ5HGo8/maxresdefault.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        }, {
            name: 'Nombre del producto',
            src: 'https://www.ocu.org/-/media/ocu/images/home/vivienda%20y%20energia/equipamiento%20hogar/herramientas%20cabecera.jpg?la=es-es&rev=9e765ac9-da97-4833-a910-e2168b4c0749&hash=4138B2A3F478CC996CF1384D157DCCFA56D61528',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        },
        {
            name: 'Nombre del producto',
            src: 'https://i.ytimg.com/vi/nVSTdQ5HGo8/maxresdefault.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        },
        {
            name: 'Nombre del producto',
            src: 'https://www.ocu.org/-/media/ocu/images/home/vivienda%20y%20energia/equipamiento%20hogar/herramientas%20cabecera.jpg?la=es-es&rev=9e765ac9-da97-4833-a910-e2168b4c0749&hash=4138B2A3F478CC996CF1384D157DCCFA56D61528',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        },
        {
            name: 'Nombre del producto',
            src: 'https://i.ytimg.com/vi/p4wdZbIg2b0/hqdefault.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 1566.15
        }
    ]
    const quantityProductsInCart = productsInCart.length

    const showAllProductsInCart = (products) => (
        products.map((product) =>
            <Card className='product'>
                <Row>
                    <Col><Figure.Image id='img' src={product.src} /></Col>
                    <Col ><Card.Title id='title'>{product.name}</Card.Title></Col>
                </Row>
                <Button as='button' variant="primary">Ver mas</Button>
            </Card>
        )
    )
    /*
    const showProductData = (product, hidden) => (
        <Card hidden={hidden}>
            <Figure.Image width={120} height={120} src={product.src} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cantidad: {product.price}</ListGroupItem>
                    <ListGroupItem>Precio: {product.price}</ListGroupItem>
                </ListGroup>
                <Button as='button' variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
    */
    const listProductsInCart = quantityProductsInCart !== 0 ? showAllProductsInCart(productsInCart) : 'no hay productos!';

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
                <Container className='product-container'>
                    <Row>
                        <Col xs={12} md={5} lg={5} className='vertical-menu'>
                            {listProductsInCart}
                        </Col>
                        <Col xs={0} md={6} lg={6} >
                            {showProductData(productsInCart[0], false)}
                        </Col>
                    </Row>
                </Container>
            </body>
            <Footer />
        </div>
    )
}

export default Cart;