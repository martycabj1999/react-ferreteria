import React, { useState, useEffect } from "react"
import { Image, Button } from "react-bootstrap";
import "./FeaturedProducts.css";
//services
import ProductService from '../../../services/ProductService';

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await ProductService.getProducts().subscribe(({ status, data }) => {
        setProducts(data);
        console.log(data[0].image);
        setStatus(status);
      });
    }
    fetchData();
  }, []);



  const listFeaturedProducts = products.map((product) =>
    <div key={product.id} className='product'>
      <Image thumbnail
        src={product.image}
      />
      <h2>Producto: {product.name}</h2>
      <h4>Precio: ${product.price}</h4>
      <Button variant="dark">Comprar</Button>
    </div>
  );

  return(
    <div className="featured-products-container">
      <h4>Productos destacados</h4>
      <div className='scroll'>
        {listFeaturedProducts}
      </div>
    </div>
  );
}

export default FeaturedProducts;
