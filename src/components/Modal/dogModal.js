import React, { Component } from 'react'
import { Button, Form, Icon, Modal, Grid, Header, Image, Message, Segment, Input, TextArea } from 'semantic-ui-react'
import axios from 'axios';
import {Redirect} from 'react-router'

import "./style.css"


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
]



class DogModal extends Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state

        return (
            <Form>
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
            </Form>
        )
    }
}


export default DogModal