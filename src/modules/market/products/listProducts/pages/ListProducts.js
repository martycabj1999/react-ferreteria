import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../components/Product';
import Error from "../../../../layouts/Error";

//services
import ProductProvider from '../../providers/ProductProvider';

const ListProducts = () => {

  const messages = useSelector(state => state.languages.messages);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      ProductProvider.getProducts().subscribe(({ status, data }) => {
        if (status === 200) {
          setProducts(data)
        }
      });
    }
    fetchData();
  }, []);

  const listProducts = products.map((product) =>
    <Product
      key={product.id}
      product={product}
    />
  );

  return (
    <Container>
      <h4 className="mt-3 mb-3">{messages['list_products_others']}</h4>
      <Row >
        {/*products.length > 0 ? listProducts : <Error mensaje={messages['list_products_not_products']} />*/}
        {products.length > 0 ? listProducts : <Spinner animation="grow" />}
      </Row>
    </Container>
  );
}
export default ListProducts;
