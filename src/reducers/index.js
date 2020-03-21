import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer';
import AlertReducer from './AlertReducer';
import AuthReducer from './AuthReducer';
import ColorPickerReducer from '../reducers/ColorPickerReducer';

export default combineReducers({
  products: ProductsReducer,
  alert: AlertReducer,
  user: AuthReducer,
  customization: ColorPickerReducer
})
