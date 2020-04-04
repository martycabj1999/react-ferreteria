import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { removeProductAction, getEditProductAction } from '../../store/ProductsAction';

// Services
import ProductProvider from '../../providers/ProductProvider';

const Product = ({product}) => {

    const messages = useSelector(state => state.languages.messages);
    const { name, price, id } = product;
    const dispatch = useDispatch();
    const history = useHistory();

    const confirmRemoveProduct = id => {
        // Preguntar al usuario
        Swal.fire({
            title: messages['crud_product_delete_question'],
            text: messages['crud_product_delete_message'],
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: messages['crud_product_delete_confirm'],
            cancelButtonText: messages['crud_product_delete_cancel'],

        }).then((result) => {
            if (result.value){
                // Pasarlo al action
                ProductProvider.inactiveProduct(id);
                dispatch (removeProductAction(id));
            }
        })
    }

    // Funcion que redirige de forma programada
    const redirectEdition = product => {
        dispatch(getEditProductAction(product));
        history.push('/edit/' + product.id);
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={() => redirectEdition(product)}
                    className="btn btn-primary mr-2"
                >    
                    {messages['crud_product_edit']}
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => confirmRemoveProduct(id)}    
                >
                    {messages['crud_product_delete']}
                </button>
            </td>

        </tr>
    );
}

// PropTypes
Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;
