import { combineReducers } from 'redux'
import ProductsReducer from './modules/market/products/store/ProductsReducer';
import AlertReducer from './modules/market/products/store/AlertReducer';
import AuthReducer from './modules/user/login/store/AuthReducer';
import ColorPickerReducer from './modules/customization/colorPicker/store/ColorPickerReducer';

export default combineReducers({
  products: ProductsReducer,
  alert: AlertReducer,
  security: AuthReducer,
  customization: ColorPickerReducer
})
