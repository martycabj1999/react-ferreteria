import React, { useState, useEffect } from "react"
import { Card, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Error from "../../../../layouts/Error";
import QuestionPopup from '../../../cart/components/QuestionPopup';
import "../styles/FeaturedProducts.css";

// Redux
import { getCartProductAction } from '../../../cart/store/CartActions';

//services
import ProductProvider from '../../providers/ProductProvider';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const messages = useSelector(state => state.languages.messages);
  const dispatch = useDispatch();

  const sendProductToCart = product => {
    dispatch(getCartProductAction(product));
    // Mostrar modal con pregunta
    setModalShow(true);
  };

  useEffect(() => {
    async function fetchData() {
      ProductProvider.getProductsFeatured().subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data)
        }
        setStatus(status);
      });
    }
    fetchData();
  }, []);

  const listFeaturedProducts = products.map((product) =>
    <Card key={product.id} className='product'>
      <Link to={`/product/${product.id}`}>
        <Image
          width="200"
          height="200"
          src={product.images[0].image}
        />
        <Card.Body>
          <Card.Title align="center">{product.name}</Card.Title>
          <Card.Text align="center">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Link>
      <QuestionPopup
        show={modalShow}
        setShow={setModalShow}
      />
      <Button
        onClick={() => sendProductToCart(product)}
        align="center"
        className="btn btn-block"
        variant="dark">
        {messages['featured_products_product_buy']}
      </Button>
    </Card >
  );

  return (
    <div className="featured-products-container">
      <h4>{messages['featured_products_product_featured']}</h4>
      <div className='scroll'>
        {status === 200 && products.length > 0 ? listFeaturedProducts : <Error mensaje={messages['featured_products_not_product_featured']} />}
      </div>
    </div>
  );
}

export default FeaturedProducts;