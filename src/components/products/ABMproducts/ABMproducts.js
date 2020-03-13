import React, { Fragment, useEffect } from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './ABMproducts.css';
import Product from './Product';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../../../actions/product/productsActions';

const ABMproducts = () => {

    const dispatch = useDispatch();

    useEffect( () => {

        //Consultar la api
        const loadProductos = () => dispatch( getProductsAction() );
        loadProductos();
    }, []);

    // Obtener el state
    const products = useSelector( state => state.products.products);
    localStorage.setItem('products', JSON.stringify(products));


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
                            { products.lenght === 0 ? 'No hay productos' : (
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

export default ABMproducts;
