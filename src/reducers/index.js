import { combineReducers } from 'redux'
import ProductsReducer from '../modules/market/products/ABMproducts/store/ProductsReducer';
import AlertReducer from './AlertReducer';
import AuthReducer from '../modules/user/login/store/AuthReducer';
import ColorPickerReducer from '../modules/customization/colorPicker/store/ColorPickerReducer';

export default combineReducers({
  products: ProductsReducer,
  alert: AlertReducer,
  user: AuthReducer,
  customization: ColorPickerReducer
})
