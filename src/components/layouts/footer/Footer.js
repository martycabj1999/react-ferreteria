import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FooterPopup from './FooterPopup';
import './Footer.css';

const Footer = () => {

    const [modalShow, setModalShow] = useState(false);
    const [modalName, setModalName] = useState('');

    const sets = (name) => {
        setModalShow(true);
        setModalName(name);
    }

    const currentColors = useSelector(state => state.customization.colors);  

    return (
        <footer style={{
            backgroundColor: currentColors.colorPrimary
            }} className="footer">
            <div className="footer-container">

                <div onClick={() => sets('Ferretería')}>
                    &copy; Ferretería
                  </div>

                <div onClick={() => sets('Políticas de privacidad')}>
                    Políticas de privacidad
                  </div>

                <div onClick={() => sets('FAQ')}>
                    FAQ
                  </div>

                <div onClick={() => sets('Términos y condiciones')}>
                    Términos y condiciones
                  </div>

                <FooterPopup
                    name={modalName}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </div>
        </footer>
    )
}

export default Footer;
