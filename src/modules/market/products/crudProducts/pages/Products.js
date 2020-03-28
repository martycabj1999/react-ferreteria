import React, { Fragment } from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/Products.css';
import Product from '../components/Product';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../../store/ProductsAction';
import Error from '../../../../layouts/Error';

const Products = () => {

    const dispatch = useDispatch();

    const loadProductos = () => dispatch(getProductsAction());
    loadProductos();

    // Obtener el state
    const messages = useSelector(state => state.languages.messages);
    const products = useSelector(state => state.products.products);
    //const [products, setProducts] = ('');
    localStorage.setItem('products', JSON.stringify(products));

    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);

    return (
        <div className="abm-container">
            <div className="button">
                <Link to="/new">
                    <Button>{messages['crud_products_add_products']}</Button>
                </Link>
            </div>
            <div className="body">
                <Fragment>
                    <h2>{messages['crud_products_list_products']}</h2>

                    { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">{messages['crud_products_error']}</p> : null}
                    { loading ? <p className="text-center">{messages['crud_products_loading']}</p> : null}

                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th>{messages['crud_products_name']}</th>
                                <th>{messages['crud_products_price']}</th>
                                <th>{messages['crud_products_actions']}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 ?
                                <Error mensaje={messages['crud_products_not_products']} />
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
