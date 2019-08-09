import React, { Component } from 'react';
import { Item, Button, Icon, Card, Image } from 'semantic-ui-react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Modal from '../components/Modal';
import axios from 'axios'
import "./style.css";


class UserPage extends Component {
  state = {
    name: '',
    email: '',
    zipcode: '',
    isLoggedIn: false,
    image: '',
    ownerId: '',
    userId: '',
    dogs: []

  }

  //loads the user info from the register / login page
  componentDidMount() {
    var userInfo = this.props.history.location.state;
    console.log(userInfo)
    axios.get(`https://borrowoofapi.herokuapp.com/api/dog/${userInfo.ownerId}`, this.state)
      .then(res => {
        if (userInfo) {
          this.setState({
            name: userInfo.name,
            email: userInfo.email,
            aboutMe: userInfo.aboutMe,
            isLoggedIn: true,
            image: userInfo.image,
            ownerId: userInfo.ownerId,
            userId: userInfo.userId,
            dogs: res.data
          })
        }
      })
      .catch(error => {
        if (userInfo) {
          this.setState({
            name: userInfo.name,
            email: userInfo.email,
            aboutMe: userInfo.aboutMe,
            isLoggedIn: true,
            image: userInfo.image,
            ownerId: userInfo.ownerId,
            userId: userInfo.userId
          })
        }
        console.log(error)
      })

  }

  render() {
    console.log(this.state)
    return <div>
      <Nav />

      {this.state.isLoggedIn ?
        <Item.Group>
          <Item>
            <Item.Image size='large' src={this.state.image} wrapped ui={false} />
            {/* <Button primary icon style={{ height: "5vh", width: "10vw" }}>
                          Have a Dog? <Icon name='right chevron' />
                      </Button> */}

            <Modal className="dogButton" modalType="Have a dog?" ownerId={this.state.ownerId} />

            <Item.Content>

              <Item.Header>Name:  <br /><br />{this.state.name}</Item.Header>
              <br />
              <h4>Contact Information:  <br /><br />{this.state.email}</h4>
              <Item.Description>
                <p>About Me: <br />
                  {this.state.aboutMe}</p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Card className>
            <Image src={this.state.dogs[0].image} />
            <Card.Content>
              <Card.Header>Name: {this.state.dogs[0].name}</Card.Header>
              <Card.Meta>
                <span className='date'>Breed: {this.state.dogs[0].breed}</span>
              </Card.Meta>
              <Card.Description>
                <p>
                  <h3>Gender</h3>{this.state.dogs[0].gender}
                  <h3>About Me:</h3>{this.state.dogs[0].aboutMe}
                  <h3>Activity Level:</h3>{this.state.dogs[0].activityLevel}
                  <h3>Good With....?</h3>{this.state.dogs[0].goodWithPeople ? `${this.state.dogs[0].goodWithPeople}, ` : ''}
                  {this.state.dogs[0].goodWithKids ? `${this.state.dogs[0].goodWithKids}, ` : ''}
                  {this.state.dogs[0].goodWithOtherDogs ? this.state.dogs[0].goodWithOtherDogs : ''}

                  <h3>Availability:</h3>{this.state.dogs[0].availableMonday ? `${this.state.dogs[0].availableMonday}, ` : ''}
                  {this.state.dogs[0].availableTuesday ? `${this.state.dogs[0].availableTuesday}, ` : ''}
                  {this.state.dogs[0].availableWednesday ? `${this.state.dogs[0].availableWednesday}, ` : ''}
                  {this.state.dogs[0].availableThursday ? `${this.state.dogs[0].availableThursday}, ` : ''}
                  {this.state.dogs[0].availableFriday ? `${this.state.dogs[0].availableFriday}, ` : ''}
                  {this.state.dogs[0].availableSaturday ? `${this.state.dogs[0].availableSaturday}, ` : ''}
                  {this.state.dogs[0].availableSunday ? this.state.dogs[0].availableSunday : ''}


                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button icon basic color="blue"><Icon name="paw" />DELETE</Button>
            </Card.Content>
          </Card>
        </Item.Group>
        : <h1> Sign-in or Sign up first </h1>
      }
      <Footer />
    </div>
  }
}

export default UserPage