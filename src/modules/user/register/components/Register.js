import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//services
import RegisterService from '../services/RegisterService';

const Register = (props) => {

    const [form, setForm] = useState({
        name: '',
        lastname: '',
        telephone: '',
        address: '',
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
        if(form.name.trim() === ''  || form.lastname.trim() === ''  || form.telephone.trim() === '' || form.email.trim() === ''  || form.password.trim() === '' ){
            setError(true);
            return;
        }
        // Eliminar el mensaje previo 
        setError(false);

        // Loguearse
        RegisterService.register(form).subscribe(({ status, data }) => {
            if(status === 200){
                console.log('exito');
            } else {
                console.log('error en el register');
            }
        });
        // Reiniciar el form
        setForm({
            name: '',
            lastname: '',
            telephone: '',
            address: '',
            email: '',
            password: ''
        })
    }

    return ( 
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" name="name" placeholder="Francisco" onChange={onChange} value={form.name}/>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type="text" name="lastname" placeholder="Fernandez" onChange={onChange} value={form.lastname} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Telefono : </Form.Label>
                <Form.Control type="text" name="telephone" placeholder="1144323422" onChange={onChange} value={form.telephone} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Direccion: </Form.Label>
                <Form.Control type="text" name="address" placeholder="Av. Falsa 123" onChange={onChange} value={form.address} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Correo Electronico: </Form.Label>
                <Form.Control type="email" name="email" placeholder="example@gmail.com" onChange={onChange} value={form.email} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control type="password" name="password" placeholder="********" onChange={onChange} value={form.password} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Registrarse
            </Button>
            { error ? <p align="center" className="alerta-error">Todos los campos son obligatorios</p> : null }
        </Form>
     );
}
 
export default Register;