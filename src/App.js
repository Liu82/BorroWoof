import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Nav from "./components/Nav";
import UserPage from "./pages/UserPage";
import DogPage from "./pages/DogPage";
=======
import Finding from './pages/FindingDog';
import RegisterDog from './pages/RegisterDog'
import RegisterUser from './pages/RegisterUser'
// import Nav from "./components/Nav";
>>>>>>> e35159373cbdd90db01616a4a93f3cec24521c76
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <Route exact path="/User" component={UserPage} />
          <Route exact path="/Dog" component ={DogPage} />
=======
          <Route exact path="/findingdog" component={Finding} />
          <Route exact path="/registeruser" component={RegisterUser} />
          <Route exact path="/registerdog" component={RegisterDog} />
>>>>>>> e35159373cbdd90db01616a4a93f3cec24521c76
        </Switch>
      </div>
    </Router>
  );
}

export default App;
