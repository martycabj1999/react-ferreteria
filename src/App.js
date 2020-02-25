import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/home/Home';
import Register from './components/register/Register';
import Cart from './components/cart/Cart';
import NotFound from "./components/NotFound";
//services
import ProductService from './services/ProductService';
import StateService from './services/StateService';
import CategoryService from './services/CategoryService';
import ImageService from './services/ImageService';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  console.log(ProductService.getProducts());
  ProductService.getProducts().subscribe(({ data }) => {
    console.log(data);
  });
  StateService.getStates().subscribe(({ data }) => {
    console.log(data);
  });
  CategoryService.getCategories().subscribe(({ data }) => {
    console.log(data);
  });
  ImageService.getImages().subscribe(({ data }) => {
    console.log(data);
  });

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />       
            <Route exact path='/register' component={Register} />      
            <Route exact path='/cart' component={Cart} />      
            <Route component={NotFound} />       
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
export default App;