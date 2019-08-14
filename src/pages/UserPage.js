import React, { Component } from 'react';
import { Item, Grid, Card, Image, Segment, List, GridColumn } from 'semantic-ui-react';
import Footer from "../components/Footer";
import NavTwo from "../components/NavTwo";
import Modal from '../components/Modal';
import axios from 'axios'
import "./style.css";
import { getLocalValues } from '../Utilities/Helper'
import "./style.css";


class UserPage extends Component {
  state = {
    name: '',
    email: '',
    zipcode: '',
    isLoggedIn: false,
    image: '',
    ownerId: '',
    about: '',
    userId: '',
    dogs: [],
    bookings: [1, 2]

  }

  //loads the user info from the register / login page
  componentDidMount() {
    let userInfo = getLocalValues();
    console.log(userInfo)
    if (userInfo) {
      axios.get(`https://borrowoofapi.herokuapp.com/api/dog/${userInfo.userId}`, this.state)
        .then(res => {
          console.log(res.data)
          if (userInfo) {
            axios.get(`https://borrowoofapi.herokuapp.com/api/booking/${userInfo.userId}`)
              .then(bookingResults => {
                console.log(bookingResults)
                this.setState({
                  name: userInfo.name,
                  email: userInfo.email,
                  about: userInfo.about,
                  image: userInfo.image,
                  ownerId: userInfo.ownerId,
                  isLoggedIn: true,
                  userId: userInfo.userId,
                  bookings: bookingResults.data,
                  dogs: res.data
                })
              })

          }
        })
        .catch(error => {
          if (userInfo) {
            this.setState({
              name: userInfo.name,
              email: userInfo.email,
              about: userInfo.about,
              image: userInfo.image,
              isLoggedIn: userInfo.isLoggedIn,
              userId: userInfo.userId
            })
          }
          console.log(error)
        })
    }


  }

  render() {
    return <div>
      <NavTwo />

      {this.state.isLoggedIn ?
        <Grid columns={2} centered padded>
          <Grid.Column >
            <Segment  padded='very' size='big'>
            <h1 style={{ textAlign: 'center' }}>User Information</h1>
            <Image className="image" size='large' src={this.state.image} /><br /> <br />
              <strong>Name:</strong> <br />{this.state.name} <br /> <br />
              <strong>Contact Information: </strong> <br /> {this.state.email}<br /><br />
              <p><strong>About Me: </strong><br />
                  {this.state.about}</p>
            </Segment>

          
        
          </Grid.Column>
            {this.state.dogs.length != 0 ? 
            <Grid.Column>
              <Segment padded='very' size='big'>
                <h1 style={{ textAlign: 'center' }}>Dog Information</h1>
                <Image className="image" size='large' src={this.state.dogs[0].image} /><br /> <br />
                  <strong>Name:</strong><br />{this.state.dogs[0].name}<br /> <br />
                  <strong>Breed:</strong><br />{this.state.dogs[0].breed}<br /> <br />

                  <strong>Gender</strong><br />{this.state.dogs[0].gender}<br /> <br />
                  <strong>About Me:</strong><br />{this.state.dogs[0].aboutMe}<br /> <br />
                  <strong>Activity Level:</strong><br />{this.state.dogs[0].activityLevel}<br /> <br />
                  <strong>Good With....?</strong><br />{this.state.dogs[0].goodWithPeople ? `${this.state.dogs[0].goodWithPeople}, ` : ''}
                      {this.state.dogs[0].goodWithKids ? `${this.state.dogs[0].goodWithKids}, ` : ''}
                      {this.state.dogs[0].goodWithOtherDogs ? this.state.dogs[0].goodWithOtherDogs : ''}<br /> <br />

                      <strong>Availability:</strong><br />{this.state.dogs[0].availableMonday ? `${this.state.dogs[0].availableMonday}, ` : ''}
                      {this.state.dogs[0].availableTuesday ? `${this.state.dogs[0].availableTuesday}, ` : ''}
                      {this.state.dogs[0].availableWednesday ? `${this.state.dogs[0].availableWednesday}, ` : ''}
                      {this.state.dogs[0].availableThursday ? `${this.state.dogs[0].availableThursday}, ` : ''}
                      {this.state.dogs[0].availableFriday ? `${this.state.dogs[0].availableFriday}, ` : ''}
                      {this.state.dogs[0].availableSaturday ? `${this.state.dogs[0].availableSaturday}, ` : ''}
                      {this.state.dogs[0].availableSunday ? this.state.dogs[0].availableSunday : ''}<br /> <br />

                    </Segment>
              </Grid.Column> : ''}
          

          <Item>{this.state.dogs.length == 0 ? <Modal className='loginModal' modalType="Have a dog?" ownerId={this.state.ownerId} /> : ''}</Item>
          <Grid.Row>
            <Grid.Column>
          <Item>
            <h1>Up Coming Bookings:</h1>

          </Item>
          <Item>

            <Item.Group relaxed='very'>

              {this.state.bookings.map(booking => {
                return (
                  <Item>
                    
                    <Item.Image size='small' avatar src={booking.image} />
                    <Item.Content verticalAlign='middle' >
                      <Item.Header>Name:{booking.name}</Item.Header> 
                    </Item.Content>
                  </Item>
                )

              })}
            </Item.Group>
          </Item>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          </Grid.Row>
          </Grid>

        : <h1> Sign-in or Sign up first </h1>
      }
      <Footer />
    </div>
  }
}

export default UserPage