import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//services
import AuthService from '../../services/AuthService';

const Login = (props) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if(form.email.trim() === ''  || form.password.trim() === '' ){
            setError(true);
            return;
        }
        // Eliminar el mensaje previo 
        setError(false);

        // Loguearse
        const formData = new FormData();
        formData.append('email', form.email);
        formData.append('password', form.password);
        console.log(formData);
        AuthService.login(formData).subscribe(({ status, data }) => {
            if(status === 200){
                console.log('exito');
            } else {
                console.log('error en el logueo');
            }
        });
        // Reiniciar el form
        setForm({
            email: '',
            password: ''
        })
    }

    return ( 
        <Form onSubmit={onSubmit} show={props.show} > 
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Correo Electronico: </Form.Label>
                <Form.Control 
                    type="email"
                    onChange={onChange}
                    value={form.email}
                    name="email" 
                    placeholder="example@gmail.com"
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control 
                    type="password" 
                    name="password"
                    onChange={onChange}
                    value={form.password}
                    placeholder="Contraseña" 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                        Iniciar Sesion
            </Button>
            { error ? <p align="center" className="alerta-error">Todos los campos son obligatorios</p> : null }
        </Form>
     );
}
 
export default Login;