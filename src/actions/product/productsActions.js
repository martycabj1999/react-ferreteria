import ProductService from '../../services/ProductService';

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR

} from '../../types/types';

// Crear nuevos productos
export function newProductAction(product){
    return async (dispatch) => {
        dispatch( addProduct() );

        try{
            // Inserto producto en la base de datos
            //await ProductService.postProduct(product);

            //Si todo sale bien actualizo el state
            dispatch( addProductSuccess(product) );

        }catch (error){
            
            // Si hay un error cambiar el state
            dispatch( addProductError(true) );

            // Mostrar el error
            //console.log(error);
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
            const respuesta = await ProductService.getProducts().subscribe(({data}) => {
                dispatch(downloadProductsSuccess(data));
            });
        }catch (error){
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
})
