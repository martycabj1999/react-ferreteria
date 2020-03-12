import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR

} from '../types/types';

//cada reducer tiene su propio state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function ( state = initialState, action ){
    switch (action.type) {
        case "SET_PRODUCT":
            return state;
            break;

        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading: action.payload
            }
        
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }

        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }        

        case DESCARGA_PRODUCTOS_EXITO:
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