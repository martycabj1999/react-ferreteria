
import {
    ADD_PRODUCT_CART,
    REMOVE_PRODUCT_CART
} from '../../../../types/types';


// Colocar producto en el carrito
export function getCartProductAction(product) {
    return (dispatch) => {
        dispatch(getCartProduct(product))
    }
}

const getCartProduct = product => ({
    type: ADD_PRODUCT_CART,
    payload: product
})

// Selecciona y elimina el producto del carrito
export function removeProductCartAction(id) {
    return async (dispatch) => {
        dispatch(getRemoveProduct(id));
    }
}

const getRemoveProduct = id => ({
    type: REMOVE_PRODUCT_CART,
    payload: id
});


