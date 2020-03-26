import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import CustomDropdown from './CustomDropdown';
import '../styles/LowerNavbar.css';
import LoginModal from '../../../user/login/pages/LoginModal';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography'

// Actions de Redux
import { setAuthUserAction } from '../../../user/login/store/AuthAction';
//services
import CategoryService from '../../../market/categories/providers/CategoryProvider';

const LowerNavbar = () => {

    const auth = useSelector(state => state.security.user); 
    const currentColors = useSelector(state => state.customization.colors);  

    /* Usuario esta logueado o no */
    const [categories, setCategories] = useState([]);
    const [isLogued, setIsLogued] = useState(false);

    // Utilizar use dispatch
    const dispatch = useDispatch();

    // Mandar a llamar el action de productoAction
    const setAuthUser = user => dispatch( setAuthUserAction(user) );

    useEffect(() => {
        
        async function fetchData(){
            await CategoryService.getCategories().subscribe(({ status, data }) => {
                if (status === 200){
                    setCategories(data);
                }
            });
        }
        fetchData();
        isLogin(auth);
    }, []);
    
    const isLogin = (user) => {
        if(user.id){
            setIsLogued(true);
        }
    }  

    const logout = () => {
        setIsLogued(false);
        setAuthUser({});
        localStorage.removeItem('user');
    }

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

    const obtainItems = (array) => (
        array.map((element) => 
            <Dropdown.Item key={element.id} as='a' >{element.name}</Dropdown.Item>

        )
    );

    //States
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const listCategories = categories ? obtainItems(categories) : null;
    const listBrands = brands ? obtainItems(brands) : null;

    return (
        <div>
            <Typography style={{
                color: currentColors.textPrimary
            }}/>
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
                                {/* Este link deberia rediregirnos al carrito */}
                                <Nav.Link href='/customization' hidden={!isLogued}>Personalización</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {/* Este link deberia rediregirnos al carrito */}
                                <Nav.Link href='/crud-products' hidden={!isLogued}>CRUD productos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/register' hidden={isLogued}> Registrarse</Nav.Link>
                                {/*<RegisterModal showRegister={showRegister} hideRegister={handleCloseRegister}/>
                                <Nav.Link href="/" hidden={isLogued}>Registrate</Nav.Link>*/}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={handleShowLogin} hidden={isLogued}> Iniciar Sesion</Nav.Link>
                                <LoginModal isLogin={isLogin} showLogin={showLogin} hideLogin={handleCloseLogin}/>
                                {/*<Nav.Link href="/" >Iniciar Sesion</Nav.Link>*/}
                            </Nav.Item>
                            <Nav.Item>
                                {/* Este link deberia rediregirnos al carrito */}
                                <Nav.Link href='/cart' hidden={!isLogued}>Carrito</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/' onClick={logout} hidden={!isLogued}>Cerrar Sesion</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LowerNavbar;