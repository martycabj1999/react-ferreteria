import React from 'react';
import { Form } from 'react-bootstrap';

const Login = (props) => {
    return ( 
        <Form show={props.show} > 
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Correo Electronico: </Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
        </Form>
     );
}
 
export default Login;