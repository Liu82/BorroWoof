import React, { Component } from 'react'
import Spinner from './spinner'
import Images from './image'
import Buttons from './button'


export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            uploading: false,
            images: []
          }
    }
    
  
    onChange = e => {
      const files = Array.from(e.target.files)
      this.setState({ uploading: true })
      console.log(`dogModal state:`)
      
      const formData = new FormData()
      
      files.forEach((file, i) => {
        formData.append(i, file)
      })
      
      
      fetch(`https://borrowoofapi.herokuapp.com/api/image-upload`, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(images => {
        console.log(images)
        this.props.onImageUploadCompletion(images)
        // this.setState({ 
        //   uploading: false,
        //   images
        // })
      })
    }
  
    removeImage = id => {
      this.setState({
        images: this.state.images.filter(image => image.public_id !== id)
      })
    }
    
    render() {
      const { uploading, images } = this.state
  
    //   const content = () => {
    //     // switch(true) {
    //     //   case uploading:
    //     //     return <Spinner />
    //     //   case images.length > 0:
    //     //     return <Images images={images} removeImage={this.removeImage} />
    //     //   default:
  
      return (
        <div>
          <div className='buttons'>
          <Buttons onChange={this.onChange} />
          </div>
        </div>
      )
    }
  }