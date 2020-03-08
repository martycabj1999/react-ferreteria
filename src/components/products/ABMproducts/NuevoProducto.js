import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../../../actions/product';

const NuevoProducto = () => {

    // State del componente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    // Utilizar use dispatch
    const dispatch = useDispatch();

    // Mandar a llamar el action de productoAction
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    // Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // Validar formulario
        if (nombre.trim() === '' || precio <= 0 ){
            return;
        }

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto(
            nombre,
            precio
        );
    }

    return (
        <div className="nuevo-producto-container">
            <Form 
                onSubmit={submitNuevoProducto}
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="string" placeholder="Nombre del producto" value={nombre} onChange={e => setNombre(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control type="number" placeholder="Precio del producto" value={precio} onChange={e => setPrecio( Number(e.target.value))}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Agregar producto
                </Button>
            </Form>
        </div>
    )
}

export default NuevoProducto;
