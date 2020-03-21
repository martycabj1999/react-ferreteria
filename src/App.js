import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './modules/layouts/Layout';
import Home from './modules/layouts/home/Home';
import Register from './modules/user/register/components/Register';
import Cart from './modules/market/cart/components/Cart';
import NotFound from "./modules/layouts/NotFound";
import NewProduct from './modules/market/products/ABMproducts/components/NewProduct';
import EditProduct from './modules/market/products/ABMproducts/components/EditProduct';
import ColorPicker from './modules/customization/colorPicker/components/ColorPicker';


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
              <Route exact path='/customization' component={ColorPicker} />

              <Route component={NotFound} />       
            </Switch>
          </Layout>
        </Provider>
      </Router>
    </div>
  );
}
export default App;