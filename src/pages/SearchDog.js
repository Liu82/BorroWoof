import React, { Component } from 'react';
import Footer from "../components/Footer";
import NavTwo from "../components/NavTwo";
import Filter from '../components/Filter';




class SearchDog extends Component {
    render() {
        return <div>
            <NavTwo/>
            <Filter/>
          <Footer/>
        </div>
    }
}
export default SearchDog;