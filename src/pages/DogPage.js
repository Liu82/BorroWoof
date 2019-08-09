import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import axios from 'axios';
import "./style.css";





const description = [
  '.',
].join(' ')


class DogPage extends Component {
  state = { dogs: [] }

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
      <Item.Group>
        {this.state.dogs.map(dog => (
          <Item>
            <Item.Image size='large' src="https://www.allthingsdogs.com/wp-content/uploads/2018/10/American-Pitbull-Terrier-Sleeping.jpg" wrapped ui={false} />

            <Item.Content>
              <Item.Header as='a'>Name: {dog.name}</Item.Header>
              <Item.Description>
                <p></p>
                <p>

                  <h3>Breed</h3>{dog.breed}
                  <h3>Gender</h3>{dog.gender}
                  <h3>About Me:</h3>{dog.aboutMe}
                  <h3>Activity Level:</h3>{dog.activityLevel}
                  <h3>Good With....?</h3>{dog.goodWithPeople? `${dog.goodWithPeople}, `:''}
                  {dog.goodWithKids? `${dog.goodWithKids}, `:''}
                  {dog.goodWithOtherDogs? dog.goodWithOtherDogs:''}
                  
                  <h3>Availability:</h3>{dog.availableMonday ? `${dog.availableMonday}, ` : ''}
                  {dog.availableTuesday ? `${dog.availableTuesday}, `:''}
                  {dog.availableWednesday? `${dog.availableWednesday}, `:''}
                  {dog.availableThursday? `${dog.availableThursday}, `:''}
                  {dog.availableFriday? `${dog.availableFriday}, `:''}
                  {dog.availableSaturday? `${dog.availableSaturday}, `:''}
                  {dog.availableSunday? dog.availableSunday:''}


                </p>
              </Item.Description>
            </Item.Content>

          </Item>
        ))}
      </Item.Group>
      <Footer />
    </div>

  }

}


export default DogPage