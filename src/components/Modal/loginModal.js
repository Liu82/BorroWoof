import React, { Component } from 'react'
import { Button, Form, Modal, Grid, Header, Segment} from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from 'react-router'

import "./style.css"

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            email:'',
            password:'',
            name:'',
            zipcode:'',
            redirect: false
         };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //handles form input changes 
        this.setState({ [event.target.id]: event.target.value });
    }

    onLoginClick = (data) => {
        console.log(this.state)
        axios.post("http://localhost:3001/api/login",this.state)
        .then(res =>{
            console.log(res.data)
            this.setState({ 
                email: res.data.email,
                name: res.data.name,
                redirect: true})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        if (this.state.redirect) return <Redirect to={{pathname: '/user', state: this.state}} />;
        else return (<Modal.Content image>
                <Grid textAlign='center' style={{ height: '40vh', width: '100vw', }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='black' textAlign='center'>
                            Login to your account
      </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input 
                                fluid icon='envelope' 
                                id ="email"
                                iconPosition='left' 
                                placeholder='E-mail address' 
                                onChange={this.handleChange} />
                                <Form.Input
                                    fluid icon='lock'
                                    id ="password"
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange} />

                                <Button onClick={this.onLoginClick}color='black' fluid size='large'>

                                    Login
          </Button>
                            </Segment>
                        </Form>
                        {/* <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message> */}
                    </Grid.Column>
                </Grid>
            </Modal.Content >)
        }
    }

export default LoginModal