import React, { Component } from "react";
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import axios from 'axios';
import "./style.css";


class Cards extends Component {
  state = { dogs: [] }

  componentDidMount() {
<<<<<<< HEAD
    axios.get("http://https://borrowoof.herokuapp/", this.state)
=======
    axios.get("https://borrowoofapi.herokuapp.com/api/dog", this.state)
>>>>>>> 9b16c6d2ac771ecddb9dde9ab79144c285f35bac
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

     </Card.Content>
          </Card>
        ))}
      </Card.Group>

    )
  }
}

class BookModal extends Component {
  state = {open: false}

  open =() => this.setState({ open:true })
  close=() => this.setState({open:false})

  render () {
    const { open } = this.state

    return (
      <Modal>
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Confirm <Icon name= 'paw'/>
          </Button>
        }
    <Modal/>
        <Modal.Header>Book Lucky</Modal.Header>
        <Modal.Content>
          <p>You're Booking With Lucky!</p> <br></br>
          <p>You Are Booked on Sat 8/8/2019 From 1pm-6pm</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close}/>
        </Modal.Actions>
        </Modal>

    )

    }
  }

export default Card;