import React from 'react';
import { useSelector } from 'react-redux';

const Subtotal = ({productsInCart}) => {

    const messages = useSelector(state => state.languages.messages);

    return (
        <div>
            <button type="button" className="btn btn-dark col-md-2 mb-3 float-right">{messages['cart_product_buy']}</button>

        </div>
    );
}

export default Subtotal;
