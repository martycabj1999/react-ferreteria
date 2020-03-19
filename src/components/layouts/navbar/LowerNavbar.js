import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import CustomDropdown from './CustomDropdown';
import './LowerNavbar.css';
import LoginModal from '../../login/LoginModal';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

//services
import CategoryService from '../../../services/CategoryService';

const LowerNavbar = () => {


    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        await CategoryService.getCategories().subscribe(({ status, data }) => {
            setCategories(data);
        });
    }, []);
    /* Listas de ejemplo */
    // Marcas
    const brands = [
        {
            id: 1,
            title: 'marca 1',
            url: 'marca_1'
        },
        {
            id: 2,
            title: 'marca 2',
            url: 'marca_2'
        }
    ];

    /* Usuario esta logueado o no */
    const isLogued = false;

    const obtainItems = (array) => (
        array.map((element) =>
            <Dropdown.Item key={element.id} as='a' >{element.name}</Dropdown.Item>
        )
    );

    //States
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const listCategories = obtainItems(categories);
    const listBrands = obtainItems(brands);

    const currentColors = useSelector(state => state.customization.colors);  

    return (
        <Container style={{
            backgroundColor: currentColors.colorPrimary
            }} fluid expand='md' className='container-navbar'>
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