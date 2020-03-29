import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import '../styles/UpperNavbar.css';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import logo from '../../../../assets/carrito.png';
import SearchProvider from '../providers/SearchProvider';
import { useHistory } from "react-router-dom";

const UpperNavbar = (props) => {

    const history = useHistory();
    const messages = useSelector(state => state.languages.messages);  
    const currentColors = useSelector(state => state.customization.colors);  

    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const onSubmitSearch = (e) => {
        e.preventDefault();
        SearchProvider.getSearch(search).subscribe(({ status, data }) => {
            if (status === 200){
                history.push('/search/' + search);
                setProducts(data);
            }
        });
        setSearch('');
    }

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
                                        name="search"
                                        onChange={ e => onChangeSearch(e) }
                                        placeholder={messages['upper_navbar_placeholder_search']}
                                    />
                                    <InputGroup.Append>
                                        <Button
                                            className="input-group-text btn btn-outline-primary"
                                            type="sumbit"
                                            onClick={ e => onSubmitSearch(e) }
                                        >
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