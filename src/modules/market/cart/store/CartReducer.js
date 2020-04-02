import {
    ADD_PRODUCT_CART

} from '../../../../types/types';

const initialState = {
    productCart: [],
}

export default function (state = initialState, action) {
    switch (action.type) {

        case ADD_PRODUCT_CART:
            return {
                ...state,
                productCart: [...state.productCart, action.payload]
            }

        default:
            return state;
    }
}