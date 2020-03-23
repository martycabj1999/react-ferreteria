import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './modules/layouts/Layout';
import Home from './modules/layouts/home/pages/Home';
import Register from './modules/user/register/components/Register';
import Cart from './modules/market/cart/pages/Cart';
import NotFound from "./modules/layouts/NotFound";
import NewProduct from './modules/market/products/crudProducts/components/NewProduct';
import EditProduct from './modules/market/products/crudProducts/components/EditProduct';
import ColorPicker from './modules/customization/colorPicker/components/ColorPicker';
import Products from './modules/market/products/crudProducts/pages/Products';
import PrivateRoute from './PrivateRoute';

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
              <PrivateRoute exact path='/cart' component={Cart} />
              <Route exact path='/new' component={NewProduct} />
              <Route exact path='/edit/:id' component={EditProduct} />
              <Route exact path='/customization' component={ColorPicker} />
              <Route exact path='/crud-products' component={Products} />

              <Route component={NotFound} />       
            </Switch>
          </Layout>
        </Provider>
      </Router>
    </div>
  );
}
export default App;