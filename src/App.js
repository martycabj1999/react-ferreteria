import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/layouts/Layout';
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            {/*<Route component={NotFound} />     */}     
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;