import React, { Component } from "react";
import Nav from "../components/Nav";
// import Jumbotron from "../components/Jumbotron";
import Modal from "../components/Modal";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

import "./style.css";

const dogs = [
    {
        name: "Nala",
        breed: "Pit",
        about: "I'm an asshole",
        image: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Kaizer",
        breed: "German Shep",
        about: "I'm an asshole too",
        image: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]

class Home extends Component {
    render() {
        return <div>
            <Nav/>
            <h1 className ="dogHeader">Your Next Playmate</h1>
            <Cards dogs={dogs}/>
            <Footer/>
        </div>
    }
}
export default Home;