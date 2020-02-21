import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedProducts from './components/featured_products/FeaturedProducts';
import Categories from './components/categorias/Categories';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/home/Home';
import Slider from './components/Slider'
import Register from './components/register/Register';
import Cart from './components/Cart';
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
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