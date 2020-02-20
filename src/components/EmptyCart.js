import React from 'react';
import { Container, Figure } from 'react-bootstrap';
import './EmptyCart.css';

const EmptyCart = () => {
    return (
        <Container>
            <Figure className='figure'>
                <Figure.Image
                    className='img'
                    width={170}
                    src='https://visualpharm.com/assets/690/Clear%20Shopping%20Cart-595b40b65ba036ed117d19bf.svg'
                />
                <Figure.Caption className='caption'>
                    <h3>Su carrito esta vacio!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </Figure.Caption>
            </Figure>
        </Container>
    )
}

export default EmptyCart
