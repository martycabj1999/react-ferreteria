import React, { useState, useEffect } from 'react';
import { Nav, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import CustomDropdown from './CustomDropdown';
import LoginModal from '../../../user/login/pages/LoginModal';
import '../styles/LowerNavbar.css';

// Actions de Redux
import { setAuthUserAction } from '../../../user/login/store/AuthAction';
//services
import CategoryService from '../../../market/categories/providers/CategoryProvider';

const LowerNavbar = () => {

  const user = useSelector(state => state.security.user);
  const currentColors = useSelector(state => state.customization.colors);

  // Utilizar use dispatch
  const dispatch = useDispatch();

  // Mandar a llamar el action de productoAction
  const setAuthUser = user => dispatch(setAuthUserAction(user));

  useEffect(() => {
    async function fetchData() {
      CategoryService.getCategories().subscribe(({ status, data }) => {
        if (status === 200)
          setCategories(data);
      });
    }
    fetchData();
    isLogedIn();
  }, []);

  const isLogedIn = () => {
    console.log(user);
    console.log('isLogued');
    if (user.id) {
      setIsLogued(true);
      console.log('isLogued');
    }
  };

  const logout = () => {
    setIsLogued(false);
    setAuthUser({});
    localStorage.removeItem('user');
  };

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

  // const onClick = (category) => dispatch(getCategoryAction(category));
  const obtainCategories = (categories) => (
    categories.map((category) =>
      <Link to={`/products-by-category/${category.id}`}>
        <Dropdown.Item key={category.id} as='a'>{category.name}</Dropdown.Item>
      </Link >
    )
  );

  const obtainBrands = (brands) => (
    brands.map((brand) =>
      <Dropdown.Item key={brand.id} as='a' >{brand.name}</Dropdown.Item>
    )
  );

  //States
  const [showLogin, setShowLogin] = useState(false);
  const [categories, setCategories] = useState([]);
  /* Usuario esta logueado o no */
  const [isLogued, setIsLogued] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const listCategories = categories ? obtainCategories(categories) : null;
  const listBrands = brands ? obtainBrands(brands) : null;

  return (
    <div>
      <Typography style={{
        color: currentColors.textPrimary
      }} />
      <Container
        style={{ backgroundColor: currentColors.colorPrimary }}
        fluid expand='md'
        className='container-navbar'
      >
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
                <Nav.Link href='/register' hidden={isLogued}> Registrarse</Nav.Link>
                {/*<RegisterModal showRegister={showRegister} hideRegister={handleCloseRegister}/>
                                <Nav.Link href="/" hidden={isLogued}>Registrate</Nav.Link>*/}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={handleShowLogin} hidden={isLogued}> Iniciar Sesion</Nav.Link>
                <LoginModal showLogin={showLogin} hideLogin={handleCloseLogin} />
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