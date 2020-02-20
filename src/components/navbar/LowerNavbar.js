import React from 'react';
import { Nav, Container, Row, Col, Dropdown } from 'react-bootstrap';
import CustomDropdown from './CustomDropdown';
import './LowerNavbar.css';

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
    const isLogued = true;

    const obtainItems = (array) => (
        array.map((element) =>
            <Dropdown.Item as='a' href={element.url}>{element.title}</Dropdown.Item>
        )
    );

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
                            <Nav.Link href='/' hidden={isLogued}>Registrate</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/' hidden={isLogued}>Iniciar Sesion</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {/* Este link deberia rediregirnos al carrito */}
                            <Nav.Link href='/carrito' hidden={!isLogued}>Carrito</Nav.Link>
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