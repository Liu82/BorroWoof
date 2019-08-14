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
      axios.post("http://localhost:3001/api/booking", {
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
            <strong>Good With....?:</strong>{this.props.dog.goodWith}<br/>
            <strong>Availability:</strong>{this.props.dog.availability}<br/>
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