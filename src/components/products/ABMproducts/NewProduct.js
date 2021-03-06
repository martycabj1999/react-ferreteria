import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { newProductAction } from '../../../actions/product/productsActions';
import { showAlertAction, hideAlertAction } from '../../../actions/product/alertActions';

//Service
import ProductService from '../../../services/ProductService';
import CategoryService from '../../../services/CategoryService';


const NewProduct = () => {

    // State del componente
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        long_description: '',
        category_id: 0
    });

    // Utilizar use dispatch
    const dispatch = useDispatch();

    // Acceder al state del store
    const loading = useSelector( state => state.products.loading);
    const alert = useSelector( state => state.alert.alert);

    // Mandar a llamar el action de productoAction
    const addProduct = product => dispatch( newProductAction(product) );

    // Cuando el usuario haga submit
    const submitNewProduct = e => {
        e.preventDefault();

        // Validar formulario
        if (product.name.trim() === '' || 
            product.price <= 0 || 
            product.description.trim() === '' || 
            product.long_description.trim() === '' ||
            product.category_id <= 0 )   
        {
            
            const alert = {
                msg: 'Todos los campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlertAction(alert));
            console.log(alert);

            return;
        }

        // Si no hay errores
        dispatch(hideAlertAction());

        // Crear el nuevo producto
        addProduct(product);

        // Mandar el producto a la base de datos
        ProductService.postProduct(product);

        //Limpiar inputs
        setProduct({
            name: '',
            price: 0,
            description: '',
            long_description: '',
            category_id: 0
        })
    }

    const onChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    // Obtener categorias para el select
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData(){
            await CategoryService.getCategories().subscribe(({ status, data }) => {
                setCategories(data);
            });
        }
        fetchData();
    }, []);

    return (
        <div>

            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}

            <Form 
                onSubmit={submitNewProduct}
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control name="name" type="string" placeholder="Nombre del producto" value={product.name} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control name="price" type="number" placeholder="Precio del producto" value={product.price} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Descripcion breve" value={product.description} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción larga</Form.Label>
                    <Form.Control name="long_description" type="text" placeholder="Descripcion larga" value={product.long_description} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Número de la categoría: </Form.Label>
                    <select name="category_id" type="number" placeholder="Número de la categoría" value={product.category_id} onChange={onChange}>
                        { categories !== 0 ? 
                            (
                                categories.map((category) =>
                                    <option>{category.id}</option>  
                                )
                            ) : null
                        }
                    </select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Agregar producto
                </Button>
            </Form>

            { loading ? <p>Cargando...</p> : null }
        </div>
    )
}

export default NewProduct;
