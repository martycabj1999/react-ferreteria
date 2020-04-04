import {
    ADD_PRODUCT_CART,
    REMOVE_PRODUCT_CART
} from '../../../../types/types';

const initialState = {
    productsCart: [],
    productRemove: null
}

export default function (state = initialState, action) {
    switch (action.type) {

        case ADD_PRODUCT_CART:
            return {
                ...state,
                productsCart: [...state.productsCart, action.payload]
            }

        case REMOVE_PRODUCT_CART:
            return {
                ...state,
                productRemove: action.payload,
                productsCart: state.productsCart.filter(product => product.id !== state.productRemove),
            }

        default:
            return state;
    }
}