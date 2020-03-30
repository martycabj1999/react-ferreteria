import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { getCartProductAction } from '../../store/ProductsAction';

const Product = ({ product }) => {

    const messages = useSelector(state => state.languages.messages);
    const dispatch = useDispatch();

    const sendProductToCart = product => {
        dispatch(getCartProductAction(product));
        console.log(product);
    }

    return (
        <Link to={`/product/${product.id}`}>
            <div style={{ width: 'auto' }}>
                <Image thumbnail style={{ maxWidth: '200' }}
                    src={product.image}
                />
                <h3>{messages['list_products_product_name']}: {product.name}</h3>
                <h3>{messages['list_products_product_price']}: ${product.price}</h3>
                <Button onClick={() => sendProductToCart(product)} className="button" variant="dark">{messages['list_products_product_buy']}</Button>
            </div>
        </Link>
    );
}

// PropTypes
Product.propTypes = {
    product: object.isRequired
}

export default Product;