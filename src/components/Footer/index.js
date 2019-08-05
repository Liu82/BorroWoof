import React, { Component } from "react";
import {
  Container,
  Grid,
  Icon,
  Segment,
} from 'semantic-ui-react';

import "./style.css";


class Footer extends Component {
  render() {
    return (
      <Segment inverted style={{ padding: '5em 0em' }}>
        <Container>
          <Grid >
            <h2 className="iconFooter">Follow Us
            <a href="https://github.com/Liu82/BorroWoof"><Icon name="github square icon big"></Icon></a>
            </h2>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
export default Footer;