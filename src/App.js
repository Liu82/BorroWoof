import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import UserPage from "./pages/UserPage";
import DogPage from "./pages/DogPage";
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/User" component={UserPage} />
          <Route exact path="/Dog" component ={DogPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
