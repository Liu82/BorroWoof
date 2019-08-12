import React, { Component, useState } from 'react'
import { Button, Form, Modal, Grid, Header, Segment, TextArea, Image } from 'semantic-ui-react'
import axios from 'axios';
import { Redirect } from 'react-router'
import Cloud from '../Cloud/app'



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
            image: '',
            ownerId: '',
            isLoggedIn: false,
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //handles form input changes 
        this.setState({ [event.target.id]: event.target.value });
    }

    setImage = (images) => {
        console.log(images)
        this.setState({ image: images[0].secure_url })

    }
    onRegisterClick = (data) => {

        axios.post("http://localhost:3001/api/signup", this.state,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                console.log(res.data)
                const data = {
                    email: res.data.email,
                    name: res.data.name,
                    userId: res.data._id,
                    ownerId: res.data._id,
                    image: res.data.image,
                    about: res.data.about,
                    token: res.data.token,
                    isLoggedIn: true,
                    redirect: true

                }
                localStorage.setItem('userData', JSON.stringify(data));
                this.setState({
                    email: res.data.email,
                    name: res.data.name,
                    userId: res.data._id,
                    ownerId: res.data._id,
                    image: res.data.image,
                    about: res.data.about,
                    token: res.data.token,
                    isLoggedIn: true,
                    redirect: true
                })
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
                            <Image src={this.state.image != '' ? this.state.image : 'https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg'} size='small' rounded />

                            <Cloud
                                onImageUploadCompletion={this.setImage}
                            />

                            <Button onClick={this.onRegisterClick} color='black' fluid size='large'>
                                Sign Up
                    </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </Modal.Content>)
    }


}

export default RegisterModal