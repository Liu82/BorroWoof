import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import DogPage from "./pages/DogPage";
import SearchDog from './pages/SearchDog';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
require ('dotenv').config ()

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/User" component={UserPage} />
          <Route exact path="/Dog" component ={DogPage} />
          <Route exact path="/searchdog" component={SearchDog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
