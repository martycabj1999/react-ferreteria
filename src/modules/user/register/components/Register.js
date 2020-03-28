import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { Form, Button } from 'react-bootstrap';
//services
import RegisterProvider from '../providers/RegisterProvider';

const Register = (props) => {

    const messages = useSelector(state => state.languages.messages); 
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
        RegisterProvider.register(form).subscribe(({ status, data }) => {
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
                <Form.Label>{messages['register_name']}: </Form.Label>
                <Form.Control type="text" name="name" placeholder={messages['register_placeholder_name']} onChange={onChange} value={form.name}/>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>{messages['register_lastname']}: </Form.Label>
                <Form.Control type="text" name="lastname" placeholder={messages['register_placeholder_lastname']}onChange={onChange} value={form.lastname} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>{messages['register_telephone']} : </Form.Label>
                <Form.Control type="text" name="telephone" placeholder="1144323422" onChange={onChange} value={form.telephone} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>{messages['register_address']}: </Form.Label>
                <Form.Control type="text" name="address" placeholder={messages['register_placeholder_address']} onChange={onChange} value={form.address} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>{messages['register_email']}: </Form.Label>
                <Form.Control type="email" name="email" placeholder="example@gmail.com" onChange={onChange} value={form.email} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>{messages['register_password']}: </Form.Label>
                <Form.Control type="password" name="password" placeholder="********" onChange={onChange} value={form.password} />
            </Form.Group>
            <Button variant="primary" type="submit">
            {messages['register_text']}
            </Button>
            { error ? <p align="center" className="alerta-error">{messages['register_obligatory']}</p> : null }
        </Form>
     );
}
 
export default Register;