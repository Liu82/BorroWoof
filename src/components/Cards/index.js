import React, { Component } from "react";
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from 'react-router'
import "./style.css";


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

    if(this.state.isLoggedIn){
      axios.post("http://localhost:3001/api/booking", this.props.dog,            {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.state.userToken}`
        }
    }) // https://some_heroku_name_api.heroku.com/api/dog
      .then(res => {
          console.log(res.data)
          alert('Successfully booked...... ')

          
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
    else return( <Card className="dogCard">
          <Image src={this.props.dog.image} />
          <Card.Content>
            <Card.Header>Name: {this.props.dog.name}</Card.Header>
            <Card.Meta>
              <span className='date'>Breed: {this.props.dog.breed}</span>
            </Card.Meta>
            <Card.Description>
              About Me: {this.props.dog.aboutMe}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button icon basic color="blue" onClick={this.onBookDogClick}><Icon name="paw" />BOOK</Button>
          </Card.Content>
        </Card>
    )
  }
}


export default Cards;