import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Redux
import { editProductAction } from '../../store/ProductsAction';

// Services
import CategoryProvider from '../../../categories/providers/CategoryProvider';

const EditProduct = () => {

    const messages = useSelector(state => state.languages.messages);
    const history = useHistory();
    const dispatch = useDispatch();

    // Nuevo state de producto
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        long_description: '',
        category_id: 0
    });

    // Producto a editar
    const productEdit = useSelector(state => state.products.productEdit);

    // Llenar el state automaticamente
    useEffect(() => {
       setProduct(productEdit);
    }, [productEdit]);


    // Cargar el producto en la base de datos
    const submitEditProduct = e => {
        e.preventDefault();
        dispatch(editProductAction(product));
        history.push('/');
    }
    
    // Leer los datos del formulario
    const onChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    // Obtener categorias para el select
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData(){
            await CategoryProvider.getCategories().subscribe(({ status, data }) => {
                setCategories(data);
            });
        }
        fetchData();
    }, []);

    return (
        <div className="edit-product-container">
            <Form
                onSubmit={submitEditProduct}
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{messages['edit_product_name']}</Form.Label>
                    <Form.Control name="name" type="string" placeholder={messages['edit_product_name']} value={product.name} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{messages['edit_product_price']}</Form.Label>
                    <Form.Control name="price" type="number" placeholder={messages['edit_product_price']} value={product.price} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{messages['edit_product_description']}</Form.Label>
                    <Form.Control name="description" type="text" placeholder={messages['edit_product_description']} value={product.description} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{messages['edit_product_long_description']}</Form.Label>
                    <Form.Control name="long_description" type="text" placeholder={messages['edit_product_long_description']} value={product.long_description} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{messages['edit_product_category']}</Form.Label>
                    <select name="category_id" type="number" placeholder={messages['edit_product_category']}  value={product.category_id} onChange={onChange}>
                        { categories !== 0 ? 
                            (
                                categories.map((category) =>
                                    <option value={category.id}>{category.name}</option>  
                                )
                            ) : null
                        }
                    </select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    {messages['edit_product_save']}
                </Button>
            </Form>
        </div>
    )
}

export default EditProduct;
