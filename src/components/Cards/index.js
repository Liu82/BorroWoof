import React, { Component } from "react";
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import axios from 'axios';
import "./style.css";


class Cards extends Component {
  state = { dogs: [] }

  componentDidMount() {
    axios.get("https://borrowoofapi.herokuapp.com/api/dog", this.state)
      .then(res => {
        console.log(res.data)
        this.setState({ dogs: res.data })
      })
      .catch(error => {
        console.log(error)
      })

  }


  render() {
    return (

      <Card.Group>
        {this.state.dogs.map(dog => (
          <Card className>
            <Image src={dog.image}/>
            <Card.Content>
              <Card.Header>Name: {dog.name}</Card.Header>
              <Card.Meta>
                <span className='date'>Breed: {dog.breed}</span>
              </Card.Meta>
              <Card.Description>
                About Me: {dog.aboutMe}
              </Card.Description>
            </Card.Content>
      <Card.Content extra>
      <Modal.Actions>
<Button primary icon='check' content='All Done' onClick={this.onRegisterDogClick} />
</Modal.Actions>
     </Card.Content>
          </Card>
        ))}
      </Card.Group>

    )
  }
}


export default Card;