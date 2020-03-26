import React from 'react';
import { Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    return (
        <Link to={`/products/${product.id}`}>
            <div 
                style={{width: 'auto'}}
            >
                <Image thumbnail style={{maxWidth:'200'}}
                    src={product.image}
                />
                <h3>Producto: {product.name}</h3>
                <h3>Precio: ${product.price}</h3>
                <Button className="button" variant="dark">Comprar</Button>      
            </div>
        </Link>
    );
}

export default Product;

