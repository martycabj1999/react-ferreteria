import React from 'react';
import { Container, Figure } from 'react-bootstrap';
import '../style/EmptyCart.css';
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <Container>
            <Figure className='figure'>
                <Figure.Image
                    className='img'
                    width={170}
                    src='../../../img/carrito.svg'
                />
                <Figure.Caption className='caption'>
                    <h3>Su carrito esta vacio!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </Figure.Caption>
                <Link to="/" >
                    <button>Volver</button>
                </Link>
            </Figure>
        </Container>
    )
}

export default EmptyCart
