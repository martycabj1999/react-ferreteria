import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { removeProductAction, getEditProductAction } from '../../../actions/product/productsActions';

const Product = ({product}) => {

    const { name, price, id } = product;
    const dispatch = useDispatch();
    const history = useHistory();

    // Confirmar si desea eliminar producto
    const confirmRemoveProduct = id => {

        // Preguntar al usuario
        Swal.fire({
            title: '¿Desea eliminar el producto?',
            text: 'Un producto que se elimina no se puede recuperar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.value){
                // Pasarlo al action
                dispatch (removeProductAction(id));
            }
        })
    }

    // Funcion que redirige de forma programada
    const redirectEdition = product => {
        dispatch(getEditProductAction(product));
        history.push('/edit/${product.id}');
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
                    Editar
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => confirmRemoveProduct(id)}    
                >
                    Eliminar
                </button>
            </td>

        </tr>
    );
}

export default Product;
