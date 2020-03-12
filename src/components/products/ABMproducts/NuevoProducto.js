import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../../../actions/product/productsActions';

//Service
import ProductService from '../../../services/ProductService';

const NuevoProducto = () => {

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
    const cargando = useSelector( state => state.products.loading);
    const error = useSelector( state => state.products.error);

    // Mandar a llamar el action de productoAction
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(product) );

    // Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // Validar formulario
        if (product.name.trim() === '' || product.price <= 0 ){
            return;
        }

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto(product);

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

    return (
        <div className="nuevo-producto-container">
            <Form 
                onSubmit={submitNuevoProducto}
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
                    <Form.Label>Número de la categoría</Form.Label>
                    <Form.Control name="category_id" type="number" placeholder="Número de la categoría" value={product.category_id} onChange={onChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Agregar producto
                </Button>
            </Form>

            { cargando ? <p>Cargando...</p> : null }
            { error ? (<p className=" alert alert-danger p2 mt-4 text-center">Hubo un error, el producto no fue agregado</p>) : null }

        </div>
    )
}

export default NuevoProducto;
