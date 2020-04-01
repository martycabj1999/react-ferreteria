import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import LoginModal from '../../../user/login/pages/LoginModal';
import CustomDropdown from './CustomDropdown';

// Actions de Redux
import { setAuthUserAction } from '../../../user/login/store/AuthAction';
//services
import CategoryProvider from '../../../market/categories/providers/CategoryProvider';
import { Fragment } from 'react';

const LowerNavbar = () => {

  const messages = useSelector(state => state.languages.messages);
  const auth = useSelector(state => state.security.user);
  const currentColors = useSelector(state => state.customization.colors);

  // Utilizar use dispatch
  const dispatch = useDispatch();
  const history = useHistory();

  // Mandar a llamar el action de productoAction
  const setAuthUser = user => dispatch(setAuthUserAction(user));

  useEffect(() => {
    async function fetchData() {
      CategoryProvider.getCategories().subscribe(({ status, data }) => {
        if (status === 200)
          setCategories(data);
      });
    }
    fetchData();
    isLogin(auth);
  }, []);

  const isLogin = (auth) => {
    if (auth.id) {
      setIsLogued(true);
    }
  };

  const logout = () => {
    setIsLogued(false);
    setAuthUser({});
    localStorage.removeItem('user');
  };

  // Marcas de ejemplo
  const brands = [
    {
      id: 1,
      name: 'marca 1',
    },
    {
      id: 2,
      name: 'marca 2',
    }
  ];

  const redirect = (category) => {
    history.push('/products-by-category/' + category.id)
  }

  // const onClick = (category) => dispatch(getCategoryAction(category));
  const obtainCategories = (categories) => (
    categories.map((category) =>
      <Link to={`/products-by-category/${category.id}`} >
        <div>
          <NavDropdown.Item onClick={ e => redirect(category)} key={category.id}>
            {category.name}
          </NavDropdown.Item>
        </div>
      </Link>
    )
  );

  const obtainBrands = (brands) => (
    brands.map((brand) =>
      <NavDropdown.Item key={brand.id}>{brand.name}</NavDropdown.Item>
    )
  );

  //States
  const [showLogin, setShowLogin] = useState(false);
  const [categories, setCategories] = useState([]);
  /* Usuario esta logueado o no */
  const [isLogued, setIsLogued] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // Obtener los items del dropdown
  const listCategories = categories ? obtainCategories(categories) : null;
  const listBrands = brands ? obtainBrands(brands) : null;

  return (
    <Fragment>
      <Typography style={{
        color: currentColors.textPrimary
      }} />
      <Navbar expand="md" style={{ backgroundColor: currentColors.colorPrimary }}>
        <Navbar.Brand>{messages['lower_navbar_menu']}</Navbar.Brand>
        <Navbar.Toggle aria-controls="collapse" />
        <Navbar.Collapse id="collapse">
          <Nav> {/* Nav izquierdo */}
            <CustomDropdown title={messages['lower_navbar_custom_dropdown_categories']} list={listCategories} />
            <CustomDropdown title={'Marcas'} list={listBrands} />
          </Nav> {/* Fin nav izquierdo */}
          <div className="m-auto">{/* Este div separa el nav izquierdo del derecho */}</div>
          <Nav> {/* Nav derecho */}
            <Nav.Item>
              <Nav.Link href='/customization' hidden={!isLogued}>{messages['lower_navbar_customization']}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/crud-products' hidden={!isLogued}>{messages['lower_navbar_crud_products']}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/register' hidden={isLogued}>{messages['lower_navbar_register']}</Nav.Link>
              {/*<RegisterModal showRegister={showRegister} hideRegister={handleCloseRegister}/>
                <Nav.Link href="/" hidden={isLogued}>Registrate</Nav.Link>*/}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleShowLogin} hidden={isLogued}>{messages['lower_navbar_login']}</Nav.Link>
              <LoginModal isLogin={isLogin} showLogin={showLogin} hideLogin={handleCloseLogin} />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/cart' hidden={!isLogued}>{messages['lower_navbar_cart']}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/' onClick={logout} hidden={!isLogued}>{messages['lower_navbar_logout']}</Nav.Link>
            </Nav.Item>
          </Nav> {/* Fin nav derecho */}
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default LowerNavbar;