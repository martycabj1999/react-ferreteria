import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/home/Home';
import Register from './components/register/Register';
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
            <Route component={NotFound} />       
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;