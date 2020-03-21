import React, { useState, useEffect } from "react"
import { Image, Button } from "react-bootstrap";
import "./FeaturedProducts.css";
//services
import ProductService from '../services/ProductService';

const FeaturedProducts = () => {

  let products = [];
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function fetchData() {
      ProductService.getProducts().subscribe(({ status, data }) => {
        if (status === 200) {
          data.map((product) => {
            if (product.images[0].featured === 1)
              products.push(product)
          });
        }
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

  const noFeaturedProducts = <div className='alert alert-danger text-center mt-4'>No hay productos destacados por el momento</div>

  return (
    <div className="featured-products-container">
      <h4>Productos destacados</h4>
      <div className='scroll'>
        {status === 200 && products.length > 0 ? listFeaturedProducts : noFeaturedProducts}
      </div>
    </div>
  );
}

export default FeaturedProducts;
