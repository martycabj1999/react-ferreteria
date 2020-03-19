import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer';
import AlertReducer from './AlertReducer';
import ColorPickerReducer from '../reducers/ColorPickerReducer';

export default combineReducers({
  products: ProductsReducer,
  alert: AlertReducer,
  customization: ColorPickerReducer
})
