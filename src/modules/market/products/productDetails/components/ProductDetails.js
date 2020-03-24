import React, { Fragment } from 'react';
import { Image, Button } from "react-bootstrap";
import '../styles/ProductDetails.css';
import { useSelector } from 'react-redux';
import FeaturedProducts from '../../featuredProducts/components/FeaturedProducts';

const ProductDetails = () => {

    const product = useSelector(state => state.products.productDetails);

    return (
        
        <div style={{width: 'auto'}}>
            <div className="product-details-image">
                <Image thumbnail style={{maxWidth:'200'}}
                    src='https://www.mndelgolfo.com/wp-content/uploads/2017/01/martillo-truper-640x360.png'
                />
            </div>
            <div className="product-details-body">
                <h3>Producto: {product.name}</h3>
                <h3>Precio: $ {product.price}</h3>
                <h5>Descripción: {product.long_description}</h5>
                <Button className="button" variant="dark">Comprar</Button>
            </div>

        </div>
    )
}

export default ProductDetails;
