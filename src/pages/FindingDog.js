import React, { Component } from 'react';
import Card from '../components/Cards'
import Footer from "../components/Footer";
import Nav from "../components/Nav";




class FindingDog extends Component {
    render() {
        return <div>
            <Nav />
          <Card/>
          <Footer/>
        </div>
    }
}
export default FindingDog;