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
import { faItalic } from '@fortawesome/free-solid-svg-icons';


const Jumbotron = ({ mobile }) => (
    <Segment
    textAlign='center'
    style={{ minHeight: 900, padding: '2em 0em', backgroundSize: 'cover', backgroundImage: `url(https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}
    vertical
  >
  <Container text>
    <Header
      as='h1'
      content='BorroWoof'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='"Dogs are not our whole life, but they make out lives whole."'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontStyle: 'Italic',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
  </Segment>
)

Jumbotron.propTypes = {
  mobile: PropTypes.bool,
}

export default Jumbotron;
