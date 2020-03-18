import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
  products: ProductsReducer,
  alert: AlertReducer

})
