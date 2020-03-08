import React, { useState, useEffect } from "react"
import Product from './Product';
import './ListProducts.css';
//services
import ProductService from '../../services/ProductService';

const ListProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      async function fetchData() {
        await ProductService.getProducts().subscribe(({ status, data }) => {
          setProducts(data);
        });
      }
      fetchData();
    }, []);
  
  
  
    const listProducts = products.map((product) =>
      <div className='product'>
        <Product 
          src = {product.image}
          price = {product.price}
        />
      </div>
    );

    return (
      <div className="list-products-container">
        <h4>Otros productos</h4>
        <div className="table">
          <div className="content">
            {listProducts}
          </div>
        </div>
      </div>
    );
}

export default ListProducts;
