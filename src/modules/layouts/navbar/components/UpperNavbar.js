import React from 'react';
import { Navbar, Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import '../styles/UpperNavbar.css';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import logo from '../../../../assets/carrito.png';


const UpperNavbar = () => {

    const messages = useSelector(state => state.languages.messages);  
    const currentColors = useSelector(state => state.customization.colors);  

    return (
        <div>
            <Typography style={{
                color: currentColors.textPrimary
            }}/>
            <Navbar style={{
                backgroundColor: currentColors.colorPrimary
                }} expand="lg">
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={6}>
                            <Navbar.Brand
                                href="/"
                                className="h1"
                                id="logo"
                            >
                                <img src={logo} width="80" height="60" alt="Logo de la pagina"/>
                                {messages['upper_navbar_business']}
                            </Navbar.Brand>
                        </Col>
                        <Col md={8} lg={6}>
                            <Form inline>
                                <InputGroup className="mt-4">
                                    <FormControl
                                        id="search"
                                        type="search"
                                        placeholder={messages['upper_navbar_placeholder_search']}
                                    />
                                    <InputGroup.Append>
                                        <Button
                                            className="input-group-text btn btn-outline-primary"
                                            type="sumbit">
                                            {messages['upper_navbar_search']}
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}

export default UpperNavbar;