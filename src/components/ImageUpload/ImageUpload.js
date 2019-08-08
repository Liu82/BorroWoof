import React, { Component } from 'react'
import {Icon} from 'semantic-ui-react'

class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
  })
    
  }
  
  
  
  
  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`${"https://localhost:3001"}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({ 
        uploading: false,
        images
      })
    })
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }
  
fileUploadHandler = () => {}

  render() {
    return(
      <div className="App">
        <input type="file"onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
    );

  }
}

