import React, { Component } from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Filter from '../components/Filter'




class FindingDog extends Component {
    render() {
        return <div>
            <Nav />
            <Filter/>
          <Footer/>
        </div>
    }
}
export default FindingDog;