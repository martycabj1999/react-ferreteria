import React, { Fragment, useEffect} from 'react'
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
        const loadProductos = () => dispatch( getProductsAction() );
        loadProductos();
    }, []);

    // Obtener el state
    
    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);
    //const [products, setProducts] = useState('');
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

                    { error ? <p className="font-weight-bold alert alert-danger text-center mt-4"> Hubo un error</p> : null}

                    { loading ? <p className="text-center">Cargando...</p> : null }

                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            { products.length === 0 ? (
                                <p className="font-weigth-bold alert alert-primary text-center mt-4"> No hay productos </p>
                            ):(
                                products.map((product) => (
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
    );
}

export default Products;
