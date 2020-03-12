import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../../types';

// Crear nuevos productos
export function crearNuevoProductoAction(product){
    return (dispatch) => {
        dispatch( agregarProducto());

        try{
            dispatch( agregarProductoExito(product) );
        }catch (error){
            dispatch( agregarProductoError(true) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// Si el producto se guarda en la base de datos
const agregarProductoExito = product => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: product
})

// Si hubo un error
const agregarProductoError = state => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: state
})