import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Product from '../../listProducts/components/Product';
import '../../listProducts/styles/ListProducts.css';
import Error from '../../../../layouts/Error';

const ProductsByCategory = () => {

    const products = useSelector(state => state.products.products);
    const category = useSelector(state => state.products.category);

    const listProducts = products.map((product) =>
        <div 
            key={product.id} 
            className='product'>
            <Product
                product={product}
            />
        </div>
    );

    return (
        <div className="list-products-container">
            <h4>Productos de la categoria: {category.name}</h4>
            <Container>
                {products.length > 0 ? listProducts : <Error mensaje="No hay productos para mostrar"/>}
            </Container>
        </div>
    );
}

export default ProductsByCategory;