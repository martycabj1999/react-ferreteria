import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import Product from './Product';
import '../styles/ListProducts.css';
import Error from "../../../layouts/Error";

//services
import SearchProvider from '../providers/SearchProvider';

const ListProducts = (props) => {

  const user = useSelector(state => state.security.user);
  const coords = JSON.parse(localStorage.getItem('geolocation'));
  const messages = useSelector(state => state.languages.messages);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    let pathname = (window.location.pathname).split('/')[2];
    var search = pathname.replace("%20", " ");

    async function fetchData() {
      SearchProvider.getSearch(search).subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data)
        }
      });
    }

    fetchData();
    
    async function searchResults (searchResults, userId, keywords, categoryName, coords) {

      SearchProvider.searchResults(searchResults, userId, keywords, categoryName, coords);
    }

    if(coords && user.id){
      searchResults(user.id, search, coords);
    } else if (user.id) {
      searchResults(user.id, search, coords);
    } else if (coords){
      searchResults(null, search, coords);
    }
    
  }, [(window.location.pathname).split('/')[2]]);
  
  const listProducts = products.map((product) =>
    <Product
      key={product.id}
      product={product}
    />
  );

  return (
    <Container>
      <h4 className="mt-3 mb-3">{messages['list_products_others']}</h4>
      <Row>
        {products.length > 0 ? listProducts : <Error mensaje={messages['list_products_not_products']} />}
      </Row>
    </Container>
  );
}
export default ListProducts;
