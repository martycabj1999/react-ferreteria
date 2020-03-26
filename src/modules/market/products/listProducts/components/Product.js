import React from 'react';
import { Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//Redux
import { getProductDetailsAction } from '../../store/ProductsAction';

const Product = ({product}) => {

    const dispatch = useDispatch();
   
    const onClick = () => {
        localStorage.setItem('productDetails', JSON.stringify(product))
        dispatch(getProductDetailsAction(product));
    }

    return (
        <Link to={`/product/${product.id}`}>
            <div 
                onClick={ () => onClick()}
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

