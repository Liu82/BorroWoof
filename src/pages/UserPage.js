import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const description = [
  '.',
].join(' ')

class UserPage extends Component {
  render() {
    return <div>
      <Nav />
  <Item.Group>
    <Item>
      <Item.Image size='large' src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/06/12/104525039-_Y2A6611.600x400.JPG?v=1497302639" wrapped ui={false} />


      <Item.Content>
        <Item.Header as='a'>Clifford Perez</Item.Header>
        <Item.Description>
          <p>{description}</p>
          <p>Dale! Do it! I love Pitbulls.<br></br> <br></br>
          t is a long established fact that a reader will be distracted by the readable <br></br> 
          content of a page when looking at its layout. The point of using Lorem Ipsum <br></br>
          is that it has a more-or-less normal distribution of letters, as opposed to <br></br>
          using 'Content here, content here', making it look like readable English.<br></br> 
      </p>
        </Item.Description>
      </Item.Content>
    </Item>

 </Item.Group>
 <Footer />
    </div>
  }
}

export default UserPage