import React, { Component } from 'react'
import { Button, Modal} from 'semantic-ui-react'
import DogModal from "./dogModal";
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal"

import "./style.css"


class ModalMultiple extends Component {
    render() {
        return (<Modal trigger={<Button>{this.props.modalType}</Button>}>
            <Modal.Header className='modalHeader'>{this.props.modalType}</Modal.Header>

            {this.props.modalType === `Register` ? <RegisterModal className ='modalForm'/> : ""}
            {this.props.modalType === `Login` ? <LoginModal/> : ""}
            {this.props.modalType === `Have a dog?` ? <DogModal ownerId={this.props.ownerId}/> : ""}

        </Modal>)
    }
}



export default ModalMultiple