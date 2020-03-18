import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/home/Home';
import Register from './components/register/Register';
import Cart from './components/cart/Cart';
import NotFound from "./components/NotFound";
import NewProduct from './components/products/ABMproducts/NewProduct';
import EditProduct from './components/products/ABMproducts/EditProduct';
//import ColorPicker from "./components/color_picker/ColorPicker";
//Redux
import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <div>
      <Router>
        <Provider store={store} >
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />       
              <Route exact path='/register' component={Register} />      
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/new' component={NewProduct} />
              <Route exact path='/edit/:id' component={EditProduct} />

              <Route component={NotFound} />       
            </Switch>
          </Layout>
        </Provider>
      </Router>
    </div>
  );
}
export default App;