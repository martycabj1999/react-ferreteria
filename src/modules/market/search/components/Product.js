import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

const Product = ({ product }) => {

    const messages = useSelector(state => state.languages.messages);

    return (
        <Link to={`/product/${product.id}`}>
            <div style={{ width: 'auto' }}>
                <Image thumbnail style={{ maxWidth: '200' }}
                    src={product.image}
                />
                <h3>{messages['list_products_product_name']}: {product.name}</h3>
                <h3>{messages['list_products_product_price']}: ${product.price}</h3>
                <Button className="button" variant="dark">{messages['list_products_product_buy']}</Button>
            </div>
        </Link>
    );
}

// PropTypes
Product.propTypes = {
    product: object.isRequired
}

export default Product;