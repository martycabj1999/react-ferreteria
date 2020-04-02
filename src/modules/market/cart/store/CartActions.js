
import {
    ADD_PRODUCT_CART
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


