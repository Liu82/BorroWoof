import React, { Component } from "react";
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from 'react-router'
import "./style.css";
import {getLocalValues} from '../../Utilities/Helper'

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('userToken') ? true : false,
      userToken: localStorage.getItem('userToken'),
      redirect:false
    };
  }

  onBookDogClick = (data) => {
    let userInfo = getLocalValues();
    if(this.state.isLoggedIn){
      axios.post("https://borrowoofapi.herokuapp.com/api/booking", {
        petId: this.props.dog._id,
        ownerId: this.props.dog.ownerId,
        userId: userInfo.userId,
        image: this.props.dog.image,
        name: this.props.dog.name
      },            {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.state.userToken}`
        }
    }) // https://some_heroku_name_api.heroku.com/api/dog
      .then(res => {
          console.log(res.data)
          alert('Successfully booked...... ')
          
          window.location.replace('/user')
          
      })
      .catch(error => {
          console.log(error)
      })
    }
    else{
      alert('Login first to book!')
    }

}


render() {
    if (this.state.redirect) return <Redirect to={{ pathname: '/user ', state: this.state }} />;
    else return( <div className="dogCard"><Card>
          <Image src={this.props.dog.image} />
          <Card.Content>
            <Card.Header>Name: {this.props.dog.name}</Card.Header>
            <Card.Description>
            <strong>Breed: </strong>{this.props.dog.breed}<br/>
            <strong>Gender: </strong>{this.props.dog.gender}<br/>
            <strong>About Me: </strong>{this.props.dog.aboutMe}<br/>
            <strong>Activity Level:</strong>{this.props.dog.activityLevel}<br/>
            <strong>Good With....?</strong><br />{this.props.dog.goodWithPeople ? `${this.props.dog.goodWithPeople}, ` : ''}
                      {this.props.dog.goodWithKids ? `${this.props.dog.goodWithKids}, ` : ''}
                      {this.props.dog.goodWithOtherDogs ? this.props.dog.goodWithOtherDogs : ''}<br /> <br />

                      <strong>Availability:</strong><br />{this.props.dog.availableMonday ? `${this.props.dog.availableMonday}, ` : ''}
                      {this.props.dog.availableTuesday ? `${this.props.dog.availableTuesday}, ` : ''}
                      {this.props.dog.availableWednesday ? `${this.props.dog.availableWednesday}, ` : ''}
                      {this.props.dog.availableThursday ? `${this.props.dog.availableThursday}, ` : ''}
                      {this.props.dog.availableFriday ? `${this.props.dog.availableFriday}, ` : ''}
                      {this.props.dog.availableSaturday ? `${this.props.dog.availableSaturday}, ` : ''}
                      {this.props.dog.availableSunday ? this.props.dog.availableSunday : ''}<br /> <br />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button icon basic color="blue" onClick={this.onBookDogClick}><Icon name="paw" />BOOK</Button>
          
          </Card.Content>
        </Card>
        </div>
    )
  }
}


export default Cards;