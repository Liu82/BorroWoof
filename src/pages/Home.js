import React, { Component } from "react";
// import Form from "../components/Nav";
// import Jumbotron from "../components/Jumbotron";
import Cards from "../components/Cards";
// import Footer from "../components/Footer";


class Home extends Component {
    render() {
        return <div>
            <h1>About Me</h1>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    }
}
export default Home;