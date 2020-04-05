import React, { useState, useEffect } from "react"
import { Card, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from "sweetalert2";
import Error from "../../../../layouts/Error";
import "../styles/FeaturedProducts.css";

// Redux
import { getCartProductAction } from '../../../cart/store/CartActions';

//services
import ProductProvider from '../../providers/ProductProvider';

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0);

  const messages = useSelector(state => state.languages.messages);
  const dispatch = useDispatch();
  const history = useHistory();

  const sendProductToCart = product => {
    Swal.fire({
      title: '¡Agregado al carrito!',
      text: '',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ir al carrito',
      cancelButtonText: 'Seguir comprando',
    }).then((result) => {
      if (result.value) {
        dispatch(getCartProductAction(product));
        history.push('/cart');
      }
    });
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
      </Link>
      <Card.Body>
        <Link>
          <Card.Title align="center">{product.name}</Card.Title>
          <Card.Text align="center">
            ${product.price}
          </Card.Text>
        </Link>
        <Button
          onClick={() => sendProductToCart(product)}
          align="center"
          className="btn btn-block"
          variant="dark">
          {messages['featured_products_product_buy']}
        </Button>
      </Card.Body>
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