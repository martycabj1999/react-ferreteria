import React, { useState, useEffect } from "react"
import { Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../styles/FeaturedProducts.css";
import Error from "../../../../layouts/Error";
// Redux
import { useSelector } from 'react-redux';

//services
import ProductService from '../../providers/ProductProvider';

const FeaturedProducts = () => {

  const messages = useSelector(state => state.languages.messages);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function fetchData() {
      ProductService.getProductsFeatured().subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data)
        }
        setStatus(status);
      });
    }
    fetchData();
  }, []);
  
  const listFeaturedProducts = products.map((product) =>
    <Link to={`/product/${product.id}`}>
      <div                 
        key={product.id} 
        className='product'
      >
        <Image thumbnail
          src={product.image}
        />
        <h2>{messages['featured_products_product_name']}: {product.name}</h2>
        <h4>{messages['featured_products_product_price']}: ${product.price}</h4>
        <Button variant="dark">{messages['featured_products_product_buy']}</Button>
      </div>
    </Link>
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
