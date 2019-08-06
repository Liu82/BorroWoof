import React, { Component } from 'react'
import { Button, Form, Icon, Modal, Grid, Header, Image, Message, Segment, Input, TextArea } from 'semantic-ui-react'
import axios from 'axios';

import "./style.css"

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
]

class NestedModal extends Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state

        return (
            <Modal
                style={{ padding: "2%" }}
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size='small'
                trigger={
                    <Button primary icon style={{ height: "5vh", width: "10vw" }}>
                        Have a Dog? <Icon name='right chevron' />
                    </Button>
                }
            >
                <h1 style={{ textAlign: "center" }}>Dog Form</h1>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Name' placeholder='Name' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Breed' placeholder='Breed'>
                        </Form.Field>
                    </Form.Group>
                    <Form.Group grouped>
                        <label>Activity Level</label>
                        <Form.Field label='Low' control='input' type='radio' name='htmlRadios' />
                        <Form.Field label='Medium' control='input' type='radio' name='htmlRadios' />
                        <Form.Field label='High' control='input' type='radio' name='htmlRadios' />
                    </Form.Group>
                    <Form.Group grouped>
                        <label>Good with...?</label>
                        <Form.Field label='People' control='input' type='checkbox' />
                        <Form.Field label='Kids' control='input' type='checkbox' />
                        <Form.Field label='Other dogs' control='input' type='checkbox' />
                    </Form.Group>
                    <Form.Group grouped>
                        <label>Availability</label>
                        <Form.Field label='Monday' control='input' type='checkbox' />
                        <Form.Field label='Tuesday' control='input' type='checkbox' />
                        <Form.Field label='Wednesday' control='input' type='checkbox' />
                        <Form.Field label='Thursday' control='input' type='checkbox' />
                        <Form.Field label='Friday' control='input' type='checkbox' />
                        <Form.Field label='Saturday' control='input' type='checkbox' />
                        <Form.Field label='Sunday' control='input' type='checkbox' />
                    </Form.Group>
                    <Form.Field control={TextArea} label='About Me' placeholder='Tell us more about your dog...' />
                </Form>
                <Modal.Actions>
                    <Button primary icon='check' content='All Done' onClick={this.close} />
                </Modal.Actions>
            </Modal>
        )
    }
}

class ModalExampleMultiple extends Component {
    render() {
        return (<Modal trigger={<Button>{this.props.modalType}</Button>}>
            <Modal.Header>{this.props.modalType}</Modal.Header>

            {this.props.modalType === `Register` ? <RegisterModal /> : loginModal()}

        </Modal>)
    }
}


class RegisterModal extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            name:'',
            email:'',
            password:'',
            zipcode:''
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //handles form input changes 
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        
        alert('A name was submitted: ' + this.state.value);        
        
    }

    onRegisterClick = (data) => {
        console.log(this.state)
        axios.post("http://localhost:3001/api/user",this.state)
        .then(data =>{
            console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        return (<Modal.Content image>
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
                                onChange={this.handleChange}/>
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

                            <Button onClick={this.onRegisterClick} color='black' fluid size='large'>
                                Sign Up
                    </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already a Member? <a href='#'>Login</a>
                    </Message>
                    <Modal.Actions >
                        <NestedModal />
                    </Modal.Actions>
                </Grid.Column>
            </Grid>
        </Modal.Content>)
    }


}

const loginModal = () => {
    return (<Modal.Content image>
        <Grid textAlign='center' style={{ height: '40vh', width: '100vw', }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    Login to your account
      </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='black' fluid size='large'>
                            Login
          </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    </Modal.Content>)
}
export default ModalExampleMultiple