import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import "./style.css";

  
class Content extends Component {

    render() {
    return(<div>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h1' style={{ fontSize: '3em' }}>
              "BorroWoof Mission"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              BorroWoof is like nothing you seen before, 
              connecting dog owners with people who just like spending time with dogs. 
              We take the headache out of planning walks, playtime, overnight stays and holidays.   
              Our goal is to help dog owners when they need it cause life happens and we get busy but that shouldn't be taken out on your beloved dog. 
              Your dog will get more exercise and playtime and at the same time, 
              it will give people without a dog the chance to spend quality time with one. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image className ="myDogs" bordered rounded size='large' src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/68386113_369346263738160_9067774936612864000_n.jpg?_nc_cat=100&_nc_oc=AQkBCJe7B-7hssKjhHCIJgH6KALIhUgQPbBRdIbZS8Br2m-gK9tuLsM7w2--pExWTDA&_nc_ht=scontent-sea1-1.xx&oh=f4c7333bb483343542b4b4cb7911e822&oe=5DD65E88' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="searchDog">
            <Button size='huge' href='/searchdog'>Search Dogs</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment className ="userStory"style={{ padding: '0em' }} vertical>
        <h1 style={{ textAlign: 'center', fontSize: '3em' }}>Testimonials</h1>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h2' style={{ fontSize: '2em' }}>
              "Why did you choose BorroWoof?"
            </Header>
            <p style={{ fontSize: '1.5em'  ,fontStyle: 'Italic',}}>"I have tried over competitors like Rover and Wags but they don't compare to BorroWoof. 
            This is so much better because it’s like Shiloh has a second family who loves him just as much as I do."</p>
            <Image className ="imagePeople" src='https://amp.businessinsider.com/images/5880d5f1ee14b63e338b73d1-750-562.jpg' />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h2' style={{ fontSize: '2em' }}>
              "Why did you want to share your dog with others?"
            </Header>
            <p style={{ fontSize: '1.5em'  ,fontStyle: 'Italic',}}> "Who doesn't love dogs? It's the best feeling when I'm having a bad day, to be welcome home with so much love.  
            But not everyone is fortunite to experince this, so it’s nice to be able to give back what I receive everyday, the love of my dog." </p>
              <Image className ="imagePeople" src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2015%2F01%2Fmarley-and-me_l-3.jpg&w=400&c=sc&poi=face&q=85' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '3em' , textAlign: 'center'}}>
        Your Next Playmate
        </Header>
        <p style={{ fontSize: '1.75em' ,textAlign: 'center', fontStyle: 'Italic'}}>
          "Making one connection at a time.
        </p>
      </Container>
    </Segment>
  </div>)}

}

export default Content