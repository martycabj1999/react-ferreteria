import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Product from '../components/Product';
import '../styles/ListProducts.css';
import Error from "../../../../layouts/Error";

//services
import ProductService from '../../providers/ProductProvider';

const ListProducts = () => {

  const messages = useSelector(state => state.languages.messages);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      ProductService.getProducts().subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data)
        }
      });
    }
    fetchData();
  }, []);

  const listProducts = products.map((product) =>
    <div key={product.id} className='product'>
      <Product 
        product={product}
      />
    </div>
  );

  return (
    <div className="list-products-container">
      <h4>{messages['list_products_other']}</h4>
      <Container>
        {products.length > 0 ? listProducts : <Error mensaje={messages['list_products_not_product']} />}
      </Container>
    </div>
  );
}
export default ListProducts;
