import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer';

export default combineReducers({
  products: ProductsReducer
})
