import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Finding from './pages/FindingDog';
import RegisterDog from './pages/RegisterDog'
import RegisterUser from './pages/RegisterUser'
// import Nav from "./components/Nav";
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/findingdog" component={Finding} />
          <Route exact path="/registeruser" component={RegisterUser} />
          <Route exact path="/registerdog" component={RegisterDog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
