import React, { Component } from "react";
import {
  Container,
  Grid,
  Icon,
  Segment,
  List,
  Header
} from 'semantic-ui-react';

import "./style.css";


class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as='h2' content='Co-Founders/Designers' />
                <List link inverted>
                  <h4><a href="https://www.linkedin.com/in/monicasochenda/"><Icon name="linkedin icon big"></Icon></a>Monica Parente  </h4>
                  <h4><a href="https://www.linkedin.com/in/shawn-liu-1b3a1837/"><Icon name="linkedin icon big"></Icon></a>Shawn Liu </h4>
                </List>
              </Grid.Column>
            
              <Grid.Column width={5}>
                <Header as='h4' inverted>
                <h2 className="iconFooter">Follow Us
            <a href="https://github.com/Liu82/BorroWoof"><Icon name="github square icon big"></Icon></a>
                </h2>
              </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }  
}

  export default Footer;