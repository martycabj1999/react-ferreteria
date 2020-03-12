import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { name, price } = product
    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <Link to={'/edit/${id}'} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button type="button" className="btn btn-danger">
                    Eliminar
                </button>
            </td>

        </tr>
    );
}

export default Product;
