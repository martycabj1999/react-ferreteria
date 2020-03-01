import React, { useState } from 'react';
import { Nav, Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import CustomDropdown from './CustomDropdown';
import './LowerNavbar.css';
import LoginModal from '../../login/LoginModal';
import Register from '../../register/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const LowerNavbar = () => {

    /* Listas de ejemplo */
    // Categorias
    const categories = [
        {
            title: 'categoria 1',
            url: 'categoria_1'
        },
        {
            title: 'categoria 2',
            url: 'categoria_2'
        },
        {
            title: 'categoria 3',
            url: 'categoria_3'
        }
    ];
    // Marcas
    const brands = [
        {
            title: 'marca 1',
            url: 'marca_1'
        },
        {
            title: 'marca 2',
            url: 'marca_2'
        }
    ];

    /* Usuario esta logueado o no */
    const isLogued = false;

    const obtainItems = (array) => (
        array.map((element) =>
            <Dropdown.Item as='a' href={element.url}>{element.title}</Dropdown.Item>
        )
    );

    //States
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const listCategories = obtainItems(categories);
    const listBrands = obtainItems(brands);

    return (
        <Container fluid expand='md' className='container-navbar'>
            <Row>
                <Col>
                    <Nav className='justify-content-start'>
                        <CustomDropdown title='Categorias' list={listCategories} />
                        <CustomDropdown title='Marcas' list={listBrands} />
                    </Nav>
                </Col>
                <Col>
                    <Nav className='justify-content-end'>
                        <Nav.Item>
                            <Nav.Link href='/' className='nav-link'>Contactanos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/register" >
                                <Button variant="primary">
                                    Registrate
                                </Button>
                            </Link>
                            {/*<RegisterModal showRegister={showRegister} hideRegister={handleCloseRegister}/>
                            <Nav.Link href="/" hidden={isLogued}>Registrate</Nav.Link>*/}
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="primary" hidden={isLogued} onClick={handleShowLogin}>
                                Iniciar Sesion
                            </Button>
                            <LoginModal showLogin={showLogin} hideLogin={handleCloseLogin}/>
                            {/*<Nav.Link href="/" >Iniciar Sesion</Nav.Link>*/}
                        </Nav.Item>
                        <Nav.Item>
                            {/* Este link deberia rediregirnos al carrito */}
                            <Nav.Link href='/cart' hidden={!isLogued}>Carrito</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/' hidden={!isLogued}>Cerrar Sesion</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default LowerNavbar;