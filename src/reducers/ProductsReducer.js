import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR

} from '../types/types';

//cada reducer tiene su propio state

const products = JSON.parse(localStorage.getItem('products'));

const initialState = {

    products: products ? products : [],
    error: null,
    loading: false
}

export default function ( state = initialState, action ){
    switch (action.type) {
        case "SET_PRODUCT":
            return state;
            break;

        case START_DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return{
                ...state,
                loading: action.payload
            }
        
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload
            }

        case DOWNLOAD_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }        

        case DOWNLOAD_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }

        default:
            return state;
            break;
    }
}