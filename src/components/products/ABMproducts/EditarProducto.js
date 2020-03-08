import React from 'react'
import { Form, Button } from 'react-bootstrap'

const EditarProducto = () => {
    return (
        <div className="editar-producto-container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="string" placeholder="Nombre del producto" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control type="number" placeholder="Precio del producto" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar cambios
                </Button>
            </Form>
        </div>
    )
}

export default EditarProducto;
