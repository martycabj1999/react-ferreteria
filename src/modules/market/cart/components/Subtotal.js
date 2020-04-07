import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Subtotal = ({productsInCart, subtotal, setSubtotal}) => {

    const messages = useSelector(state => state.languages.messages);

    useEffect(() => {
        const sumProductsPrice = (productsInCart) => {
            productsInCart.map((product) => (
                setSubtotal(subtotal + product.price)
            ));
        }
        sumProductsPrice(productsInCart);
    }, [productsInCart]);

    console.log(subtotal);

    return (
        <div>
            <p>Subtotal: $ {subtotal}</p>

            <button type="button" className="btn btn-dark col-md-2 mb-3 float-right">{messages['cart_product_buy']}</button>
        </div>
    );
}

export default Subtotal;
