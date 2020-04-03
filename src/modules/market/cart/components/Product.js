import React from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

// Redux
import { useSelector } from 'react-redux';

const Product = ({ product }) => {

  const messages = useSelector(state => state.languages.messages);
  const { name, price, id } = product;

  // Confirmar si desea eliminar producto
  const confirmRemoveProduct = () => {
    // Preguntar al usuario
    Swal.fire({
      title: messages['cart_product_delete_question'],
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: messages['cart_product_delete_confirm'],
      cancelButtonText: messages['cart_product_delete_cancel'],
    }).then((result) => {

    })
  }

  // Funcion que redirige de forma programada
  const confirmBuyProduct = () => {
    // Preguntar al usuario
    Swal.fire({
      title: messages['cart_product_buy_question'],
      icon: 'primary',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: messages['cart_product_buy_confirm'],
      cancelButtonText: messages['cart_product_buy_cancel'],

    }).then((result) => {
      console.log('Eliminado');
    })
  }

  return (
    <tr>
      <td>{name}</td>
      <td><span className="font-weight-bold">$ {price}</span></td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => confirmBuyProduct()}
          className="btn btn-primary mr-2"
        >
          {messages['cart_product_buy']}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmRemoveProduct(id)}
        >
          {messages['cart_product_delete']}
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