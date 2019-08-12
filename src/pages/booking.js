import React, { Component } from "react";
import Nav from "../components/Nav";
import index from "../Cards/index.js"

class Home extends Component {
    render() {
        return <div>
            <Nav/>
            {/* <Cloud/> */}
            <h1 className ="dogHeader">Your Next Playmate</h1>
            <Cards/>
            <Footer/>
        </div>
    }
}
 <index/>
export default Home;

