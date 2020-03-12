import ProductService from '../../services/ProductService';

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR

} from '../../types/types';

// Crear nuevos productos
export function crearNuevoProductoAction(product){
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try{
            // Inserto producto en la base de datos
            //await ProductService.postProduct(product);

            //Si todo sale bien actualizo el state
            dispatch( agregarProductoExito(product) );

        }catch (error){
            
            // Si hay un error cambiar el state
            dispatch( agregarProductoError(true) );

            // Mostrar el error
            //console.log(error);
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

//Funcion que descarga los productos de la base de datos
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch( descargarProductos() );
    
        try{
            const respuesta = await ProductService.getProducts().subscribe(({data}) => {
                dispatch(descargarProductosExitosa(data));
            });
        }catch (error){
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = products => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: products
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})
