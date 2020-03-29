import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Product from './Product';
import '../styles/ListProducts.css';
import Error from "../../../layouts/Error";

//services
import SearchProvider from '../providers/SearchProvider';

const ListProducts = (props) => {

  const messages = useSelector(state => state.languages.messages);
  const [products, setProducts] = useState([]);


  
  useEffect(() => {
    async function fetchData() {

      let pathname = (window.location.pathname).split('/')[2];
      var search = pathname.replace("%20", " ");

      SearchProvider.getSearch(search).subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data)
        }
      });
    }
    fetchData();
  }, [(window.location.pathname).split('/')[2]]);

  const listProducts = products.map((product) =>
    <div key={product.id} className='product'>
      <Product 
        product={product}
      />
    </div>
  );

  return (
    <div className="list-products-container">
      <h4>{messages['search_list_products_results']}</h4>
      <Container>
        {products.length > 0 ? listProducts : <Error mensaje={messages['search_list_products_not_products']} />}
      </Container>
    </div>
  );
}
export default ListProducts;
