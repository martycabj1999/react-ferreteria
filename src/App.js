import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/home/Home';
import Register from './components/register/Register';
import Cart from './components/cart/Cart';
import NotFound from "./components/NotFound";
import NuevoProducto from './components/products/ABMproducts/NuevoProducto';
import EditarProducto from './components/products/ABMproducts/EditarProducto';
import ColorPicker from "./components/color_picker/ColorPicker";
//services
import ProductService from './services/ProductService';
import StateService from './services/StateService';
import CategoryService from './services/CategoryService';
import ImageService from './services/ImageService';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  


/*
  StateService.getStates().subscribe(({ data }) => {
    console.log(data);
  });
  CategoryService.getCategories().subscribe(({ data }) => {
    console.log(data);
  });
  ImageService.getImages().subscribe(({ data }) => {
    console.log(data);
  });
*/
  return (
    <div>
      <Router>
        <Provider store={store} >
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />       
              <Route exact path='/register' component={Register} />      
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/nuevo' component={NuevoProducto} />
              <Route exact path='/editar/:id' component={EditarProducto} />

              <Route component={NotFound} />       
            </Switch>
          </Layout>
        </Provider>
      </Router>
    </div>
  );
}
export default App;