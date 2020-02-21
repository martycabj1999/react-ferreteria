import React from 'react';
import { Form } from 'react-bootstrap';

const Register = (props) => {
    return ( 
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="email" placeholder="Francisco" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type="email" placeholder="Fernandez" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Correo Electronico: </Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control type="password" placeholder="********" />
            </Form.Group>
        </Form>
     );
}
 
export default Register;