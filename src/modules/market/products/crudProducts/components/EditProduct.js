import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Redux
import { editProductAction } from '../../store/ProductsAction';

// Services
import CategoryService from '../../../categories/providers/CategoryProvider';

const EditProduct = () => {

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
            await CategoryService.getCategories().subscribe(({ status, data }) => {
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
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control name="name" type="string" placeholder="Nombre del producto" value={product.name} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control name="price" type="number" placeholder="Precio del producto" value={product.price} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción breve</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Descripcion breve" value={product.description} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descripción larga</Form.Label>
                    <Form.Control name="long_description" type="text" placeholder="Descripcion larga" value={product.long_description} onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Número de la categoría</Form.Label>
                    <select name="category_id" type="number" placeholder="Número de la categoría"  value={product.category_id} onChange={onChange}>
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
                    Guardar cambios
                </Button>
            </Form>
        </div>
    )
}

export default EditProduct;
