import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Confirm <Icon name='paw'/>
          </Button>
        }
      >
        <Modal.Header>Book Lucky</Modal.Header>
        <Modal.Content>
          <p>You're Booking With Lucky!</p><br></br>
          <p>You are booked on Sat 8/8/2019 
              From 1pm-6pm
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const BookModal = () => (
  <Modal trigger={<Button>Multiple Modals</Button>}>
     <Modal.Header>Confirmed</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='paw' />
      </div>
      <Modal.Description>
        <p>You have booked Lucky!</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default ModalExampleMultiple  