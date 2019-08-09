import React, { Component } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Modal from '../components/Modal';
import "./style.css";


class UserPage extends Component {
  state = {
    name:'',
    email:'',
    zipcode:'',
    isLoggedIn: false
  }

  //loads the user info from the register page
  componentDidMount(){
    var userInfo = this.props.history.location.state;
    console.log(userInfo)
    if(userInfo){
      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        aboutMe: userInfo.aboutMe,
        isLoggedIn: true
      })
    }
  }

  render() {

    return <div>
      <Nav />

      {this.state.isLoggedIn ? 
        <Item.Group>
          <Item>
            {/* <Item.Image size='large' src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/06/12/104525039-_Y2A6611.600x400.JPG?v=1497302639" wrapped ui={false} /> */}
            {/* <Button primary icon style={{ height: "5vh", width: "10vw" }}>
                          Have a Dog? <Icon name='right chevron' />
                      </Button> */}

            <Modal className="dogButton" modalType="Have a dog?" />
                  
            <Item.Content>
              
              <Item.Header>Name:  <br/><br/>{this.state.name}</Item.Header>
              <br/>
              <h4>Contact Information:  <br/><br/>{this.state.email}</h4>
              <Item.Description>
              <p>About Me: <br/>
              {this.state.aboutMe}</p>
              </Item.Description>
            </Item.Content>
          </Item>

        </Item.Group>
      : <h1> Sign-in or Sign up first </h1>
      }
       
      
       
       <Footer />
     </div>
  }
}

export default UserPage