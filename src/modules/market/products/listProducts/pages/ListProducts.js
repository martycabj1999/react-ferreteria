import React, { useState, useEffect } from "react"
import { Container } from 'react-bootstrap';
import Product from '../components/Product';
import '../styles/ListProducts.css';
//services
import ProductService from '../../providers/ProductProvider';

const ListProducts = () => {

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

  const noProducts = <div className="alert alert-danger text-center mt-4">No hay productos para mostrar</div>

  return (
    <div className="list-products-container">
      <h4>Otros productos</h4>
      <Container>
        {products.length > 0 ? listProducts : noProducts}
      </Container>
    </div>
  );
}
export default ListProducts;
