import React, { Component } from 'react'
import { Button, Form, Modal, Input, TextArea, Image } from 'semantic-ui-react'
import axios from 'axios';
import Cloud from '../Cloud/app'
import { Redirect } from 'react-router'
import "./style.css"


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
]



class DogModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            ownerId: this.props.ownerId ? this.props.ownerId : 'noOwner',
            name: '',
            gender: '',
            breed: '',
            activityLevel: '',
            goodWithPeople: '',
            goodWithKids: '',
            goodWithOtherDogs: '',
            availableMonday: '',
            availableTuesday: '',
            availableWednesday: '',
            availableThursday: '',
            availableFriday: '',
            availableSaturday: '',
            availableSunday: '',
            aboutMe: '',
            image: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(this.state)
        if (event.target.id === "low" || event.target.id === "medium" || event.target.id === "high") {
            this.setState({ activityLevel: event.target.id });
        }
        else if (event.target.id === "male" || event.target.id === "female") {
            this.setState({ gender: event.target.id });

        }
        else if (event.target.id === "people") {
            this.setState({ goodWithPeople: event.target.id });
        }
        else if (event.target.id === "kids") {
            this.setState({ goodWithKids: event.target.id });
        }
        else if (event.target.id === "otherDogs") {
            this.setState({ goodWithOtherDogs: event.target.id });
        }
        else if (event.target.id === "monday") {
            this.setState({ availableMonday: event.target.id });
        }
        else if (event.target.id === "tuesday") {
            this.setState({ availableTuesday: event.target.id });
        }
        else if (event.target.id === "wednesday") {
            this.setState({ availableWednesday: event.target.id });
        }
        else if (event.target.id === "thursday") {
            this.setState({ availableThursday: event.target.id });
        }
        else if (event.target.id === "friday") {
            this.setState({ availableFriday: event.target.id });
        }
        else if (event.target.id === "saturday") {
            this.setState({ availableSaturday: event.target.id });
        }
        else if (event.target.id === "sunday") {
            this.setState({ availableSunday: event.target.id });
        }
        else {
            this.setState({ [event.target.id]: event.target.value });
        }
    }

    setImage = (images) => {
        console.log(images)
        this.setState({ image: images[0].secure_url })

    }

    onRegisterDogClick = (data) => {
        console.log(this.state)
        console.log("Dog Data")
        axios.post("https://borrowoofapi.herokuapp.com/api/dog", this.state) // https://some_heroku_name_api.heroku.com/api/dog
            .then(res => {
                console.log(res.data)
                window.location.replace('/user')
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        if (this.state.redirect) return <Redirect to={{ pathname: '/user', state: this.state }} />;
        else return (
            <Form>
                <h1 style={{ textAlign: "center" }}>Dog Form</h1>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='Name'
                        id="name"
                        onChange={this.handleChange}
                        placeholder='Name' />
                    <Form.Field
                        control={Input}
                        label='Breed'
                        id="breed"
                        onChange={this.handleChange}
                        placeholder='Breed'>
                    </Form.Field>
                </Form.Group>
                <Form>
                <Form.Group inline>
                    <label>Gender</label>
                    <Form.Field
                        label='Male'
                        control='input'
                        type='radio'
                        value='male'
                        id="male"
                        checked={this.state.gender == 'male'}
                        onChange={this.handleChange}
                        name='htmlRadios' />
                    <Form.Field
                        label='Female'
                        control='input'
                        type='radio'
                        value='female'
                        checked={this.state.gender == 'female'}
                        id="female"
                        onChange={this.handleChange}
                        name='htmlRadios' />
                </Form.Group>
                </Form>

                <Form.Group inline>
                    <label>Activity Level</label>
                    <Form.Field
                        label='Low'
                        control='input'
                        type='radio'
                        value='low'
                        id="low"
                        checked={this.state.activityLevel == 'low'}
                        onChange={this.handleChange}
                        name='htmlRadios' />
                    <Form.Field
                        label='Medium'
                        control='input'
                        type='radio'
                        id="medium"
                        value="medium"
                        checked={this.state.activityLevel == 'medium'}
                        onChange={this.handleChange}
                        name='htmlRadios' />
                    <Form.Field
                        label='High'
                        control='input'
                        type='radio'
                        value='high'
                        id="high"
                        checked={this.state.activityLevel == 'high'}
                        onChange={this.handleChange}
                        name='htmlRadios' />
                </Form.Group>
                <Form.Group inline>
                    <label>Good with...?</label>
                    <Form.Field
                        label='People'
                        control='input'
                        id="people"
                        onChange={this.handleChange}
                        type='checkbox' />
                    <Form.Field
                        label='Kids'
                        control='input'
                        id="kids"
                        onChange={this.handleChange}
                        type='checkbox' />
                    <Form.Field
                        label='Other dogs'
                        control='input'
                        id="otherDogs"
                        onChange={this.handleChange}
                        type='checkbox' />
                </Form.Group>
                <Form.Group inline>
                    <label>Availability</label>
                    <Form.Field
                        label='Monday'
                        control='input'
                        id="monday"
                        onChange={this.handleChange}
                        type='checkbox' />
                    <Form.Field
                        label='Tuesday'
                        control='input'
                        id="tuesday"
                        onChange={this.handleChange}
                        type='checkbox' />
                    <Form.Field
                        label='Wednesday'
                        control='input'
                        id="wednesday"
                        type='checkbox' />
                    <Form.Field
                        label='Thursday'
                        control='input'
                        id="thursday"
                        onChange={this.handleChange}
                        type='checkbox' />
                    <Form.Field
                        label='Friday'
                        control='input'
                        id="friday"
                        onChange={this.handleChange}
                        type='checkbox' />
                    <Form.Field
                        label='Saturday'
                        id="saturday"
                        control='input'
                        onChange={this.handleChange}
                        type='checkbox' />
                    <Form.Field
                        label='Sunday'
                        control='input'
                        id="sunday"
                        onChange={this.handleChange}
                        type='checkbox' />
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label='About Me'
                    id="aboutMe"
                    onChange={this.handleChange}
                    placeholder='Tell us more about your dog...' />
                <Image src={this.state.image != '' ? this.state.image : 'https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg'} size='small' rounded />

                <Cloud
                    onImageUploadCompletion={this.setImage}
                />
                <Modal.Actions>
                    <Button primary icon='check' content='All Done' onClick={this.onRegisterDogClick} />
                </Modal.Actions>

            </Form>
        )
    }
}


export default DogModal