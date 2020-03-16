import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const EditProduct = () => {

    // Producto a editar
    const product = useSelector(state => state.products.productedit);

    // Retorna null si se pierde el state al reiniciar la pagina
    if(!product) return null;

    return (
        <div className="edit-product-container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control name="name" type="string" placeholder="Nombre del producto" value={product["name"]} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control name="price" type="number" placeholder="Precio del producto"  value={product["price"]}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Descripcion breve" value={product["description"]}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción larga</Form.Label>
                    <Form.Control name="long_description" type="text" placeholder="Descripcion larga" value={product["long_description"]}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Número de la categoría</Form.Label>
                    <Form.Control name="category_id" type="number" placeholder="Número de la categoría"  value={product["category_id"]}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar cambios
                </Button>
            </Form>
        </div>
    )
}

export default EditProduct;
