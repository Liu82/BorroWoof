import React, { Component } from "react";
import NavTwo from "../components/NavTwo";
import DogCards from "../components/Cards";
import Footer from "../components/Footer";
import Jumbotron from '../components/Jumbotron';
import SideNav from "../components/SideNav";
import Content from "../components/Content"
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
            <NavTwo />
            <Jumbotron/>
            <Content/>
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