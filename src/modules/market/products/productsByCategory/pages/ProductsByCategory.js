import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../listProducts/components/Product';
import '../../listProducts/styles/ListProducts.css';
import Error from '../../../../layouts/Error';
import ProductService from '../../providers/ProductProvider';

const ProductsByCategory = () => {

    const category = JSON.parse(localStorage.getItem('category'));
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            ProductService.getProductsByCategoryId(category.id).subscribe(({ status, data }) => {
                if (status === 200) {
                    setProducts(data)
                }
            });
        }
        fetchData();
    }, [category, setProducts]);

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
                {products.length > 0 ? listProducts : <Error mensaje="No hay productos para mostrar" />}
            </Container>
        </div>
    );
}

export default ProductsByCategory;