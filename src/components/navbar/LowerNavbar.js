import React from 'react';
import { Nav, Container, Row, Col, Dropdown } from 'react-bootstrap';
import CustomDropdown from './CustomDropdown';
import './LowerNavbar.css';

const LowerNavbar = ({ categories, brands, sections, isLogued }) => {
    // Categorias, marcas y rubros
    const obtainItems = (array) => (
        array.map((element) =>
            <Dropdown.Item as="a" href={element.url}>{element.title}</Dropdown.Item>
        )
    );

    const listCategories = obtainItems(categories);
    const listBrands = obtainItems(brands);
    const listSections = obtainItems(sections);

    return (
        <Container fluid expand="md" className="container-navbar">
            <Row>
                <Col>
                    <Nav className="justify-content-start">
                        <CustomDropdown title="Categorias" list={listCategories} />
                        <CustomDropdown title="Marcas" list={listBrands} />
                        <CustomDropdown title="Rubros" list={listSections} />
                    </Nav>
                </Col>
                <Col>
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/" className="nav-link">Contactanos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" hidden={isLogued}>Registrate</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" hidden={isLogued}>Iniciar Sesion</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" hidden={!isLogued}>Carrito</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/" hidden={!isLogued}>Cerrar Sesion</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default LowerNavbar;