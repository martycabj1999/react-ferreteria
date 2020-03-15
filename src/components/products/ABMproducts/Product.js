import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { removeProductAction } from '../../../actions/product/productsActions';

const Product = ({product}) => {

    const { name, price, id } = product;
    const dispatch = useDispatch();

    // Confirmar si desea eliminar producto
    const confirmRemoveProduct = id => {

        // Preguntar al usuario

        // Pasarlo al action
        dispatch (removeProductAction(id));
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <Link to={'/edit/${id}'} className="btn btn-primary mr-2">
                    Editar
                </Link>
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
