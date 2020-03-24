import React, { useState, useEffect } from "react"
import { Image, Button } from "react-bootstrap";
import "../styles/FeaturedProducts.css";
import Error from "../../../../layouts/Error";

//services
import ProductService from '../../providers/ProductProvider';

const FeaturedProducts = () => {

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
    <div key={product.id} className='product'>
      <Image thumbnail
        src={product.image}
      />
      <h2>Producto: {product.name}</h2>
      <h4>Precio: ${product.price}</h4>
      <Button variant="dark">Comprar</Button>
    </div>
  );

  return (
    <div className="featured-products-container">
      <h4>Productos destacados</h4>
      <div className='scroll'>
        {status === 200 && products.length > 0 ? listFeaturedProducts : <Error mensaje="No hay productos destacados por el momento" />}
      </div>
    </div>
  );
}

export default FeaturedProducts;
