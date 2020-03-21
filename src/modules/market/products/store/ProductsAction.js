import ProductService from '../services/ProductService';
import Swal from 'sweetalert2';

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

// Crear nuevos productos
export function newProductAction(product){
    return async (dispatch) => {
        dispatch( addProduct() );

        try{
            // Inserto producto en la base de datos
            await ProductService.postProduct(product);

            //Si todo sale bien actualizo el state
            dispatch( addProductSuccess(product) );

            // Alerta de exito
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )

        }catch (error){
                        
            // Si hay un error cambiar el state
            dispatch( addProductError(true) );

            // Mostrar el error
            //console.log(error);

            // Alerta de error
            Swal.fire({
                icon: 'Error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

// Si el producto se guarda en la base de datos
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// Si hubo un error
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})


//Funcion que descarga los productos de la base de datos
export function getProductsAction(){
    return async (dispatch) => {
        dispatch( downloadProducts() );
    
        try{
            await ProductService.getProducts().subscribe(({data}) => {
                dispatch(downloadProductsSuccess(data));
            });

        }catch (error){
            console.log(error);
            dispatch(downloadProductsError());
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
});

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});


// Selecciona y elimina el producto
export function removeProductAction(id){
    return async (dispatch) => {
        dispatch(getRemoveProduct(id));

        try{
            await ProductService.deleteProduct(id);
            dispatch(removeProductSuccess());

            // Si se elimina, mostrar la alerta
            Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'succes'
            )

        }catch{
            dispatch(removeProductError());
        }
    }
}

const getRemoveProduct = id =>({
    type: GET_PRODUCT_REMOVE,
    payload: id
});

const removeProductSuccess = () => ({
    type: REMOVE_PRODUCT_SUCCESS
})

const removeProductError = () => ({
    type: REMOVE_PRODUCT_ERROR,
    payload: true
})


// Colocar producto en edicion
export function getEditProductAction(product){
    return(dispatch) => {
        dispatch(getEditProduct(product))
    }
}

const getEditProduct = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})


// Edita un registro en la api y en el state
export function editProductAction(product){
    return async (dispatch) => {
        dispatch(editProduct(product));

        try{
            ProductService.putProduct(product);
            dispatch(editProductSuccess(product));
        }catch{
            dispatch(editProductError());
        }
    }
}

const editProduct = product => ({
    type: START_EDIT_PRODUCT
})

const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})

const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
})