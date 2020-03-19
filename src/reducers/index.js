import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer';
import ColorPickerReducer from '../reducers/ColorPickerReducer';

export default combineReducers({
  products: ProductsReducer,
  customization: ColorPickerReducer
})
