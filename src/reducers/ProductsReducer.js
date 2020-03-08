import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';

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
        default:
            return state;
            break;
    }
}