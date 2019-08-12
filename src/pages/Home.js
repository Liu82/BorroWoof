import React, { Component } from "react";
import Nav from "../components/Nav";
import DogCards from "../components/Cards";
import Footer from "../components/Footer";
import axios from "axios"
import { Card, Button, Icon, Image } from 'semantic-ui-react'

import "./style.css";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
        }
    }


    componentDidMount() {
        axios.get("http://localhost:3001/api/dog", this.state)
            .then(res => {
                console.log(res.data)
                this.setState({ dogs: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return <div>
            <Nav />
            <h1 className="dogHeader">Your Next Playmate</h1>
            <Card.Group className centered itemsPerRow={4}>

                {this.state.dogs.map((dog, index) => {
                    return (<DogCards dog={dog} />)
                })}
            </Card.Group>
            <Footer />
        </div>
    }
}

export default Home;
