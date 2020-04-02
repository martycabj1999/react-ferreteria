import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_REMOVE,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    START_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,

} from '../../../../types/types';

//cada reducer tiene su propio state
const allProducts = JSON.parse(localStorage.getItem('products'));

const initialState = {
    products: allProducts ? allProducts : [],
    error: null,
    loading: false,
    productRemove: null,
    productEdit: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCT":
            return state;

        case START_DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case DOWNLOAD_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case REMOVE_PRODUCT_ERROR:
        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }

        case GET_PRODUCT_REMOVE:
            return {
                ...state,
                productRemove: action.payload
            }

        case REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productRemove),
                productRemove: null
            }

        case START_EDIT_PRODUCT:
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }

        
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                productEdit: null,
                products: state.products.map(product =>
                    product.id === action.payload.id ? product = action.payload : product
                )

            }

        default:
            return state;
    }
}