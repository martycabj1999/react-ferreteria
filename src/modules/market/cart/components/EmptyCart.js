import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Figure } from 'react-bootstrap';
import '../styles/EmptyCart.css';
import { Link } from 'react-router-dom';
import carrito from '../../../../assets/carrito.png';

const EmptyCart = () => {

  const messages = useSelector(state => state.languages.messages);

  return (
    <Container>
      <Figure className='figure'>
        <Figure.Image
          className='img'
          width={170}
          src={carrito} // no funciona
        />
        <Figure.Caption className='caption'>
          <h3>{messages['cart_empty']}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </Figure.Caption>
        <Link to='/'>
          <button>{messages['cart_back']}</button>
        </Link>
      </Figure>
    </Container>
  )
}

export default EmptyCart
