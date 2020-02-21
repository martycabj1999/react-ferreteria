import React from 'react';
import { Navbar, Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './UpperNavbar.css';

const UpperNavbar = () => {

    return (
        <Navbar expand="lg">
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={6}>
                        <Navbar.Brand
                            href="/"
                            className="h1"
                            id="logo">
                            Ferreteria
                        </Navbar.Brand>
                    </Col>
                    <Col md={8} lg={6}>
                        <Form inline>
                            <InputGroup className="mt-4">
                                <FormControl
                                    id="search"
                                    type="search"
                                    placeholder="Que estas buscando? Ejemplo: Tornillos"
                                />
                                <InputGroup.Append>
                                    <Button
                                        className="input-group-text btn btn-outline-primary"
                                        type="sumbit">
                                        Buscar
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default UpperNavbar;