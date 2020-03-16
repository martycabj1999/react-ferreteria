import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const EditProduct = () => {

    // Producto a editar
    const product = useSelector(state => state.products.productedit);
    console.log(product);
    return (
        <div className="edit-product-container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control name="name" type="string" placeholder="Nombre del producto"  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control name="price" type="number" placeholder="Precio del producto"  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Descripcion breve" v/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción larga</Form.Label>
                    <Form.Control name="long_description" type="text" placeholder="Descripcion larga" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Número de la categoría</Form.Label>
                    <Form.Control name="category_id" type="number" placeholder="Número de la categoría"  />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar cambios
                </Button>
            </Form>
        </div>
    )
}

export default EditProduct;
