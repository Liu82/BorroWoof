import React, { Component } from "react";
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import "./style.css";

class Cards extends Component {

  render() {
    return (

      <Card.Group>
        {this.props.dogs.map(dog => {
          return <Card className>
            <Image src={dog.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{dog.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{dog.breed}</span>
              </Card.Meta>
              <Card.Description>
                {dog.about}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button icon basic color="blue"><Icon name="paw" />BOOK</Button>
            </Card.Content>
          </Card>
        })}
      </Card.Group>

    )
  }
}
export default Cards;