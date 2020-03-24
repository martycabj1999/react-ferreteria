import React, { Fragment } from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/Products.css';
import Product from '../components/Product';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../../store/ProductsAction';

const Products = () => {

    const dispatch = useDispatch();

    const loadProductos = () => dispatch(getProductsAction());
    loadProductos();

    // Obtener el state
    const products = useSelector(state => state.products.products);
    //const [products, setProducts] = ('');
    localStorage.setItem('products', JSON.stringify(products));

    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);

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

                    {error ? <p className="font-weight-bold alert alert-danger text-center mt-4"> Hubo un error</p> : null}
                    {loading ? <p className="text-center">Cargando...</p> : null}

                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 ?
                                <p className="font-weigth-bold alert alert-primary text-center mt-4"> No hay productos </p>
                                :
                                products.map((product) => (
                                    <Product
                                        product={product}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </Fragment>
            </div>
        </div>
    );
}

export default Products;
