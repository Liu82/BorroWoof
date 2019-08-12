import React, { Component } from "react";
import { Card, Button, Checkbox, Form, Input, Select } from 'semantic-ui-react'
import DogCards from '../Cards'
import axios from 'axios'
import "./style.css";
import { exportDefaultSpecifier } from "@babel/types";

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const activityLevel = [
    { key: 'l', text: 'Low', value: 'Low' },
    { key: 'm', text: 'Medium', value: 'Medium' },
    { key: 'h', text: 'High', value: 'High' },
]

const filterNames = ['availableMonday', 'availableTuesday']
class FormExampleFieldControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            gender: '',
            breed: '',
            activityLevel: '',
            goodWithPeople: '',
            goodWithKids: '',
            goodWithOtherDogs: '',
            availableMonday: false,
            availableTuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            redirect: false,
            dogs: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
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
            this.setState( prevState => ({ availableMonday: !prevState.availableMonday}));
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

    handleClick = (e, { checked }) => this.log('Click', checked)

    componentDidMount() {
        axios.get("http://localhost:3001/api/dog", this.state)
            .then(res => {
                console.log(res.data)
                this.setState({ dogs: res.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <Form >
                    <h1 className="searchDog">Search For Your Prefect Companion</h1>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Breed' id='breed' placeholder='Breed' onChange={this.handleChange}
                        />
                        <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
                        <Form.Field control={Select} label='Activity Level' options={activityLevel} placeholder='Level' />

                    </Form.Group>
                    <Form.Group inline>
                        <label>Good with?</label>
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
                            checked={this.state.monday}
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
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
                <Card.Group className centered itemsPerRow={4}>

                    {this.state.dogs.map((dog, index) => {
                        
                        //If there are breed filters check if this dog matches the entered words
                        if(this.state.breed != '' && !dog.breed.toLowerCase().includes(this.state.breed.toLowerCase())){
                           return 
                        }else{
                            return <DogCards dog={dog} />
                        }

                        
                        // else if(dog.gender.)
                    })}
                </Card.Group>
            </div>
        )
    }
}

export default FormExampleFieldControl
