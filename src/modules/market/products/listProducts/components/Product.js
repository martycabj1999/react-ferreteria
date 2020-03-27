import React from 'react';
import { Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

const Product = ({ product }) => {

    return (
        <Link to={`/product/${product.id}`}>
            <div style={{ width: 'auto' }}>
                <Image thumbnail style={{ maxWidth: '200' }}
                    src={product.image}
                />
                <h3>Producto: {product.name}</h3>
                <h3>Precio: ${product.price}</h3>
                <Button className="button" variant="dark">Comprar</Button>
            </div>
        </Link>
    );
}

// PropTypes
Product.propTypes = {
    product: object.isRequired
}

export default Product;