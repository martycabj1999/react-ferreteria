import React, { Fragment, useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './Products.css';
import Product from './Product';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../../../actions/product/productsActions';

const Products = () => {

    const dispatch = useDispatch();

    useEffect( () => {

        //Consultar la api
        const loadProducts = () => dispatch( getProductsAction() );
        loadProducts();
    }, []);

    // Obtener el state
    //const products = useSelector( state => state.products.products);
    const [products, setProducts] = useState('');

    return (
        <div className="abm-container">
            <div className="button">
                <Link to="/new">
                    <Button>Agregar productos</Button>
                </Link>
            </div>

            <div className="body">
                <Fragment>
                    <h2>Listado de Productos</h2>

                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            { products.length === 0 ? <p className="alert alert-danger mt-4 text-center"> No hay productos </p> : (
                                    products.map(product => (
                                        <Product 
                                        product={product}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </Fragment>
            </div>
        </div>
    )
}

export default Products;
