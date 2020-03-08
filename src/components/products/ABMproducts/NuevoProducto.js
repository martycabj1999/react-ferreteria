import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../../../actions/product/productsActions';

const NuevoProducto = () => {

    // State del componente
    const [product, setProduct] = useState({
        name: '',
        price: 0,
    });

    // Utilizar use dispatch
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector( state => state.products)
    console.log(cargando);

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

        //Limpiar inputs
        setProduct({
            name: '',
            price: 0
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

                <Button variant="primary" type="submit">
                    Agregar producto
                </Button>
            </Form>
        </div>
    )
}

export default NuevoProducto;
