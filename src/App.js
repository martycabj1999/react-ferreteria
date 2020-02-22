import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/home/Home';
import Register from './components/register/Register';
import Cart from './components/cart/Cart';
import NotFound from "./components/NotFound";
//services
import ProductService from './services/ProductService';s

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  ProductService.getProducts().subscribe(({ status, data }) => {
    if (status === 200) {
      this.setState({
        provinces: data,
        spinnerCity: false
      });
    } else {
  const pathname = window.location.pathname
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