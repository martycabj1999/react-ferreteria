import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FooterPopup from '../components/FooterPopup';
import '../styles/Footer.css';
import Typography from '@material-ui/core/Typography'

const Footer = () => {

    const [modalShow, setModalShow] = useState(false);
    const [modalName, setModalName] = useState('');

    const sets = (name) => {
        setModalShow(true);
        setModalName(name);
    }

    const messages = useSelector(state => state.languages.messages);  
    const currentColors = useSelector(state => state.customization.colors);  

    return (
      <div>
        <footer style={{
              backgroundColor: currentColors.colorPrimary
              }} className="footer">
          <Typography style={{
            color: currentColors.textPrimary
          }} />
          
            <div className="footer-container">

              <div onClick={() => sets('Ferretería')}>
                &copy; {messages.footer_business}
              </div>

              <div onClick={() => sets('Políticas de privacidad')}>
                {messages.footer_policies}
              </div>

              <div onClick={() => sets('FAQ')}>
                {messages.footer_faq}
              </div>

              <div onClick={() => sets('Términos y condiciones')}>
                {messages.footer_term_and_conditions}
              </div>

              <FooterPopup
                name={modalName}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

            </div>
        </footer>
      </div>
    )
}

export default Footer;
