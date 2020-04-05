import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import { Container, Row } from 'react-bootstrap';
import FooterPopup from '../components/FooterPopup';
import '../styles/Footer.css';

const Footer = () => {

  const [modalShow, setModalShow] = useState(false);
  const [modalName, setModalName] = useState('');

  const setModalNameAndShowIt = (name) => {
    setModalShow(true);
    setModalName(name);
  };

  const messages = useSelector(state => state.languages.messages);
  const currentColors = useSelector(state => state.customization.colors);

  return (
    <footer
      style={{
        backgroundColor: currentColors.colorPrimary
            }}
      className="py-3 mt-3">
      <Typography style={{
        color: currentColors.textPrimary
      }} />
      <Container className="footer-container">
        <Row>
          <div onClick={() => setModalNameAndShowIt('Ferretería')}>
            &copy;{messages['footer_business']}
          </div>
        </Row>
        <Row>
          <div onClick={() => setModalNameAndShowIt('Políticas de privacidad')}>
            {messages['footer_policies']}
          </div>
        </Row>
        <Row>
          <div onClick={() => setModalNameAndShowIt('FAQ')}>
            {messages['footer_faq']}
          </div>
        </Row>
        <Row>
          <div onClick={() => setModalNameAndShowIt('Términos y condiciones')}>
            {messages['footer_term_and_conditions']}
          </div>
        </Row>
      </Container>
      <FooterPopup
        name={modalName}
        show={modalShow}
        setShow={setModalShow}
      />
    </footer>
  );
}

export default Footer;
