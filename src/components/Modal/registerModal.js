import React, { Component } from 'react'
import { Button, Form, Icon, Modal, Grid, Header, Message, Segment, Input, TextArea } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from 'react-router';
import ImageUpload from '../ImageUpload/ImageUpload';
import "./style.css"


class RegisterModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: '',
            email: '',
            password: '',
            zipcode: '',
            aboutMe: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //handles form input changes 
        this.setState({ [event.target.id]: event.target.value });
    }

    onRegisterClick = (data) => {
        axios.post("http://localhost:3001/api/user", this.state)
            .then(res => {
                console.log(res.data)
                this.setState({ redirect: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.redirect) return <Redirect to={{ pathname: '/user', state: this.state }} />;
        else return (<Modal.Content image>
            <Grid textAlign='center' style={{ height: '60vh', width: '100vw', }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='black' textAlign='center'>
                        Register to your account
                </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='user'
                                iconPosition='left'
                                id="name"
                                placeholder='Your Name'
                                onChange={this.handleChange} />
                            <Form.Input
                                fluid icon='envelope'
                                iconPosition='left'
                                id="email"
                                placeholder='E-mail address'
                                onChange={this.handleChange} />
                            <Form.Input
                                fluid
                                id="password"
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid icon='map marker alternate'
                                iconPosition='left'
                                id='zipcode'
                                placeholder='Zip Code'
                                onChange={this.handleChange}
                            />

                            <Form.Field 
                            control={TextArea} 
                            label='About Me'
                            id="aboutMe" 
                            placeholder='Tell us more about you...'
                            onChange={this.handleChange}
                            />

                         
                         <ImageUpload/>
                         
                         <Button onClick={this.onRegisterClick} color='black' fluid size='large'>
                                Sign Up
                    </Button>
                        </Segment>
                    </Form>
                    {/* <Message>
                        Already a Member? <a href=''>Login</a>
                    </Message> */}
                    {/* <Modal.Actions >
                        <NestedModal />
                    </Modal.Actions> */}
                 
                </Grid.Column>
            </Grid>
        </Modal.Content>)
    }


}



export default RegisterModal;